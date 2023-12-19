import {db} from "../db.js"

export const getContatos = (_, res) => {
    const query = "SELECT * FROM contato order by nome"

    db.query(query, (err, data) => {
        if(err) return res.json(err)
        return res.status(200).json(data)
    })
}

export const addContato = (req, res) => {
    const query = "INSERT INTO contato(nome, telefone, grupo) VALUES(?)"

    const values = [
        req.body.nome,
        req.body.telefone,
        req.body.grupo
    ]

    db.query(query, [values], (err) => {
        if(err) return res.json(err)
        return res.status(200).json("Contato criado com sucesso.")
    })
}

export const editContato = (req, res) => {
    const query = "UPDATE contato SET nome = ?, telefone = ?, grupo = ? WHERE id = ?"

    const values = [
        req.body.nome,
        req.body.telefone,
        req.body.grupo
    ]

    db.query(query, [...values, req.params.id], (err) => {
        if(err) return res.json(err)
        return res.status(200).json("Contato editado com sucesso.")
    })
}

export const elimContato = (req, res) => {
    const query = "DELETE FROM contato WHERE id = ?"

    db.query(query, [req.params.id], (err) => {
        if(err) return res.json(err)
        return res.status(200).json("Contato eliminado com sucesso.")
    })
}