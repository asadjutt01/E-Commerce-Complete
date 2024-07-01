const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');
const cors = require('cors')
const multer = require('multer')
const path = require('path')
const dotenv = require('dotenv');
const cloudinary = require('cloudinary').v2;
const fs = require('fs');



const port = process.env.PORT || 4000;


const app = express()

app.use(cors())
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));
app.get("/", (req, res) => {
    res.send("Express App is running")
})


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

exports.handler = async (event) => {
    try {
        const body = JSON.parse(event.body);
        const fileUrl = body.fileUrl; // Assuming fileUrl is passed in the request body

        const { secure_url } = await cloudinary.uploader.upload(fileUrl, { resource_type: "auto" });

        return {
            statusCode: 200,
            body: JSON.stringify({
                success: true,
                imageUrl: secure_url
            })
        };
    } catch (error) {
        console.error('Error uploading file:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({
                success: false,
                error: 'Something went wrong'
            })
        };
    }
};






  
  // Multer storage configuration
//   const storage = multer.memoryStorage({
//     destination: "./upload/images",
//     filename: function (req, file, cb) {
//       cb(null, `${file.fieldname}_${Date.now()}_${path.extname(file.originalname)}`);
//     }
//   });
//   const upload = multer({ storage: storage });
  
//   Serve static images
//   app.use("/images", express.static("upload/images"));
  
//   File upload endpoint
//   app.post("/upload", upload.single('product'), async (req, res) => {
//     try {
//       if (!req.file) {
//         return res.status(400).json({ success: false, error: 'No file uploaded' });
//       }
  
//       // Upload file to Cloudinary
//       const result = await cloudinary.uploader.upload(req.file.path, { resource_type: "auto" });
  
//       // Delete the file from local storage after uploading to Cloudinary
//       fs.unlinkSync(req.file.path);
  
//       res.json({
//         success: true,
//         imageUrl: result.secure_url
//       });
//     } catch (error) {
//       console.error('Error uploading file:', error);
//       res.status(500).json({ success: false, error: 'Something went wrong' });
//     }
//   });
//schema for mongo db
//schema for User
const userschema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cartdata: {
        type: Object
    },
    date: {
        type: Date,
        default: Date.now
    },


}, { timestamps: true })


const User = mongoose.model("User", userschema)



//schema for Peoduct
const productschema = new mongoose.Schema(
    {
        id: {
            type: Number,
            required: true,
        },
        name: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        old_price: {
            type: Number,
            required: true
        },
        new_price: {
            type: Number,
            required: true
        },
        available: {
            type: Boolean,
            default: true
        },
    }
    , { timestamps: true })
const Product = mongoose.model("Product", productschema)

app.post("/signup", async (req, res) => {
    let check = await User.findOne({ email: req.body.email })

    if (check) {
        return res.status(400).json({ success: false, Error: "Email Address is Already Exist" })
    }
    let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i] = 0;

    }


    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        cartdata: cart,
    })
    await user.save()

    const data = {
        user: {
            id: user.id
        }
    }

    const token = jwt.sign(data, `${process.env.SECRET_KEY}`)

    res.status(200).json({ success: true, token })




})
app.post("/login", async (req, res) => {
    let user = await User.findOne({ email: req.body.email })
    if (user) {
        const passcomapre = req.body.password === user.password;
        if (passcomapre) {
            const data = {
                user: {
                    id: user.id
                }
            }
            const token = jwt.sign(data, `${process.env.SECRET_KEY}`)

            res.json({ success: true, token })
        } else {
            res.json({ success: false, error: "Incorrect password" })
        }

    } else {
        res.json({ success: false, error: "Incorrect Email Id" })
    }


})

app.post("/addproduct", async (req, res) => {
    let products = await Product.find({})
    let id;
    if (products.length > 0) {
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id + 1
    } else {
        id = 1;
    }
    const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        old_price: req.body.new_price,
        new_price: req.body.old_price,
    })
    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
        success: true,
        name: req.body.name
    })
})
app.post("/removeproduct", async (req, res) => {
    await Product.findOneAndDelete({
        id: req.body.id,
    })

    console.log("Removed");
    res.json({
        success: true,
        name: req.body.name
    })
})

app.get("/allproduct", async (req, res) => {
    let products = await Product.find({})
    console.log("all product fetched")
    res.send(products)
})


app.get("/newcollection", async (req, res) => {
    let products = await Product.find({})
    let newcollection = products.slice(1).slice(-8)
    console.log("New Collection fetched")
    res.send(newcollection)
})
app.get("/popularinwomen", async (req, res) => {
    let products = await Product.find({ category: 'women' })
    let popular_in_women = products.slice(0, 4)
    console.log("popular_in_women fetched")
    res.send(popular_in_women)
})

const fetchuser = async (req, res, next) => {
    const token = req.header('auth-token')
    if (!token) {
        res.status(401).send({ error: "Please Authenticate using valid token" })
    }
    else {
        try {
            const data = jwt.verify(token, `${process.env.SECRET_KEY}`)
            req.user = data.user;
            next();
        } catch (error) {

            res.status(401).send({ error: "Please Authenticate using valid token" })
        }
    }
}

app.post("/addtocart", fetchuser, async (req, res) => {
    console.log("removed", req.body.ItemId)
    let userdata = await User.findOne({ _id: req.user.id })
    // console.log(userdata)
    userdata.cartdata[req.body.ItemId] += 1;

    await User.findOneAndUpdate({ _id: req.user.id }, { cartdata: userdata.cartdata })
    res.send({ message: "Product Added" })
})
app.post("/removefromcart", fetchuser, async (req, res) => {
    console.log("removed", req.body.ItemId)
    let userdata = await User.findOne({ _id: req.user.id })
    if (userdata.cartdata[req.body.ItemId] > 0)
        userdata.cartdata[req.body.ItemId] -= 1;

    await User.findOneAndUpdate({ _id: req.user.id }, { cartdata: userdata.cartdata })
    res.send({ message: "Product Updaetd" })
})

app.post("/getcart", fetchuser,async (req, res) => {
    console.log("Get cart")
    let userdata = await User.findOne({ _id: req.user.id })
    res.send(userdata.cartdata)
})
app.get("/", (req, res) => {
    res.send("Express App is running")
})



app.post('/upload', async (req, res) => {
    try {
      const fileUrl = req.body.fileUrl;
      const { secure_url } = await cloudinary.uploader.upload(fileUrl, { resource_type: "auto" });
  
      res.status(200).json({
        success: true,
        imageUrl: secure_url
      });
    } catch (error) {
      console.error('Error uploading file:', error);
      res.status(500).json({
        success: false,
        error: 'Something went wrong'
      });
    }
  });
// app.listen(port, (error) => {
//     if (!error) {
//         console.log("Server Running on port")
//     }
//     else {
//         console.log("Error : " + error)
//     }
// })
module.exports = app;
