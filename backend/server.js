import express from "express"
import { connectDB } from "./config.js/db.js";
import routes from "./Routes/route.js"
import path from "path"

const app = express();
const PORT = process.env.PORT || 5000

const __dirname = path.resolve();

app.use(express.json());// allows us to accept JSON data in the req.body

app.use("/api/products", routes)

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}


app.listen(PORT, ()=>{
    connectDB(); //connects the database
    console.log("Server started at http://localhost:" + PORT);  
})

