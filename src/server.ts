import express from "express";
import cors from "cors";
import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// GET: buscar ou listar uma informação
// POST: criar alguma nova infornação
// PUT: Atualizar uma informação existente
// DELETE: Deletar uma informação existente

app.listen(3333);
