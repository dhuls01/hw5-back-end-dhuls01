import express from "express"
import bodyParser from "body-parser";
import cors from "cors";
import multer from "multer";
import useRoutes from "./routes/users.js"
import path from 'path';
const storage=multer.diskStorage({
  destination: (req,file,cb)=>{
    cb(null,'images')
  },
  filename:(req,file,cb)=>{
    console.log(file)
    cb(null, Date.now()+ path.extname(file.originalname))
  }
})
const upload=multer({storage})
const app = express();
// app.set('view engine', "ejs");
app.get("/upload", (req, res)=>{
  res.render("upload")
})

app.post("/upload", upload.single("image"), (req,res)=>{
  res.send("image uploaded succeffully")
})


const PORT = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(cors());
app.use("/", useRoutes)
app.get("/",(req, res)=>{
  res.send("connected successfully")
});
app.all("*", (req, res)=>res.send("page not found!!"));

app.listen(PORT,()=>
console.log(`server lstening form http://localhost:${PORT}`)
)

