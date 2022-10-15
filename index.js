<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="index.js"></script>
</head>
<body>
    <div class="center-fixed">
        <h1>Cadastro de produto</h1>
        <form id="frmCadastro">
            <section>
                <label for="txtCod">Código:</label><br>
                <input id="txtCod" type="text"><br>
                <label for="txtNome">Nome:</label><br>
                <input id="txtNome" type="text"><br>
                <label for="txtDescricao">Valor:</label><br>
                <input id="txtDescricao" type="text"><br>
                <input type="submit" id="btnCadastrar" value="Cadastrar"><br>
            </section>
        </form>
    </div>
    <table>
        <caption>
            <h2>Lista de produtos</h2>
        </caption>
        <thead>
            <tr>
                <th>Código</th>
                <th>Nome</th>
                <th>Descrição</th>
            </tr>
        </thead>
        <tbody id="tbodyResultados">
        </tbody>
        <tfoot></tfoot>

    </table>
</body>
</html>
