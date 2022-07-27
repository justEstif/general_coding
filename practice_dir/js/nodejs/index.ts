import http from "http";
import fs from "fs/promises";
import path from "path";

const PORT = process.env.PORT || 8080;
interface LocalFile {
  fileData: string;
  statusCode: number;
  contentType: { "Content-Type": string };
}

const server = http.createServer(async (req, res) => {
  if (req.url) {
    const file = await getFileData(req.url);
    if (file) {
      const { statusCode, fileData, contentType } = file;
      res.writeHead(statusCode, contentType);
      res.write(fileData);
      res.end();
    }
  }
});

server.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});

// get file info
const getFileData = async (url: string) => {
  let filename = url === "/" ? "index.html" : url;
  const filePath = path.join(__dirname, "/public", filename);
  return await readFile(filePath);
};

// read file
const readFile = async (filePath: string) => {
  try {
    await fs.access(filePath);
    const fileData = await fs.readFile(filePath, "utf8");
    const contentType = getContentType(filePath);
    const successFile: LocalFile = {
      fileData,
      statusCode: 200,
      contentType,
    };
    return successFile;
  } catch (err) {
    const x = err as { code: string };
    if (x.code === "ENOENT") {
      const filePath = path.join(__dirname, "/public", "404.html");
      const fileData = await fs.readFile(filePath, "utf8");
      const contentType = getContentType(filePath);
      const error404File: LocalFile = {
        fileData,
        statusCode: 404,
        contentType,
      };
      return error404File;
    } else {
      const serverErrorFile: LocalFile = {
        fileData: `<h1>Server Error</h1>`,
        statusCode: parseInt(x.code),
        contentType: { "Content-Type": "text/javascript" },
      };
      return serverErrorFile;
    }
  }
};

const getContentType = (filePath: string) => {
  let extname = path.extname(filePath);
  switch (extname) {
    case ".js":
      return { "Content-Type": "text/javascript" };
    case ".css":
      return { "Content-Type": "text/css" };
    case ".json":
      return { "Content-Type": "application/json" };
    case ".png":
      return { "Content-Type": "image/png" };
    case ".jpg":
      return { "Content-Type": "image/jpg" };
    default:
      return { "Content-Type": "text/html" };
  }
};

/* if (req.url === "/") {
  res.writeHead(200, { "Content-Type": "text/html" })
  const body = await readFile("index.html")
  if (typeof body === "string") {
    res.write(body)
  } else {
    console.log(body)
    res.write("Error")
  }
  res.end()
}

if (req.url === "/about") {
  res.writeHead(200, { "Content-Type": "text/html" })
  const body = await readFile("about.html")
  if (typeof body === "string") {
    res.write(body)
  } else {
    console.log(body)
    res.write("Error")
  }
  res.end()
}

if (req.url === "/api/users") {
  const users = [
    { name: "Bob Smith", age: 40 },
    { name: "Hon Mon", age: 40 },
  ]
  res.writeHead(200, { "Content-Type": "application/json" })
  res.write(JSON.stringify(users))
  res.end()
} */
