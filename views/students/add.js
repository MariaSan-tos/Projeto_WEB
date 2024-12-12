<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet">
    <title>Adicionar Aluno</title>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="/">App</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="/users/login">Login</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/students">Alunos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/courses">Cursos</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="container mt-4">
        <h1 class="text-center">Adicionar Aluno</h1>
        <form action="/students/add" method="POST" class="mx-auto" style="max-width: 400px;">
            <div class="mb-3">
                <label for="name" class="form-label">Nome</label>
                <input type="text" class="form-control" id="name" name="name" required>
            </div>
            <div class="mb-3">
                <label for="age" class="form-label">Idade</label>
                <input type="number" class="form-control" id="age" name="age" required>
            </div>
            <div class="mb-3">
                <label for="course" class="form-label">Curso</label>
                <select class="form-control" id="course" name="courseId" required>
                    <% courses.forEach(course => { %>
                        <option value="<%= course.id %>"><%= course.name %></option>
                    <% }) %> 
                </select>
            </div>
            <button type="submit" class="btn btn-success w-100">Salvar</button>
        </form>
    </div>
    <footer class="text-center mt-4">
        <p>&copy; 2024 App. Todos os direitos reservados.</p>
    </footer>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>