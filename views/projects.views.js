function createPage(title, projects) {

    let html = `<!DOCTYPE html>
                <html lang="es"> 
                    <head> 
                        <meta charset="UTF-8"> 
                        <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
                        <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
                        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
                        <title> Portfolio - ` + title + `</title>
                    </head>
                    <body>
                        <nav class="navbar navbar-expand-lg bg-body-tertiary">
                            <div class="container-fluid">
                                <a class="navbar-brand" href="/">Portfolio</a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li class="nav-item">
                                            <a class="nav-link" href="/mobile">Mobile</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/landing">Landing Page</a>
                                        </li>
                                            <li class="nav-item">
                                            <a class="nav-link" href="/webapp">Web App</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/ecommerce">e-Commerce</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/games">Games</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        <div class="row gx-2 mt-3">`


    if (title === "Home") {

        html += createHome();

    } else {

        for (let project of projects) {

            if (title === "Mobile"  && project.section === "mobile") {
    
                html += createContent(title, project);
    
            } else if (title === "Landing Page"  && project.section === "landing") {
    
                html += createContent(title, project);
        
            } else if (title === "Web App"  && project.section === "webapp") {
    
                html += createContent(title, project);
    
            } else if (title === "e-Commerce"  && project.section === "ecommerce") {
    
                html += createContent(title, project);
    
            } else if (title === "Games"  && project.section === "games") {
    
                html += createContent(title, project);
    
            }
    
        }
    }


    html += `</div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
        </body></html>`;
    
    return html

}

function createContent(title, project) {

    let html = `<div class="col-lg-6 mt-2">
                        <div class="card p-2">
                            <div class="row">
                                <div class="col-4 d-flex align-items-center">
                                    <a><img src="` + project.img + `" alt="Imágen del Proyecto ` + project.name + `" class="card-img"></a>
                                </div>
                                <div class="col-8">
                                    <div class="card-body p-0">
                                        <a class="link-dark link-underline-opacity-0"><h3 class="card-title fs-5 mb-0">` + project.name + `</h3></a>
                                        <ul>
                                            <li> Descripción: ` + project.description + `</li>
                                            <li> Repositorio: <a href="` + project.link + `">Link</a></li>
                                            <li> Tecnología: <ul>`
                                            
                                            for (let technology of project.technologies) {
                                                html+= `<li>` + technology + `</li>`
                                            }                                            
                                            
                                            html += `</ul></li>
                                            <li> Sección: ` + title + `</li>
                                        </ul>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
    


    return html

}

function createHome() {
    let html = `<div>
                    <div class="p-4 mb-4 border rounded d-flex flex-column align-items-center">
                        <img src="https://images.squarespace-cdn.com/content/v1/5c63dd6ed74562e92b659277/1559918677670-L3FS80YJ18B43O8UZXTD/Team.jpg" alt="Avatar" class="rounded-circle img-thumbnail mb-3">
                        <h1 class="fs-2 fw-semibold">Juan Ignacio Amestoy</h1>
                        <p class="card-text">Estudiante de Desarrollo Web</p>
                    </div>

                    <div class="p-4 mb-4 border rounded d-flex flex-column">
                        <div>
                            <h2 class="fs-5 fw-semibold">Sobre mi</h2>

                            <p>Soy un estudiante de Desarrollo Web cursando el último cuatrimestre.</p>
                        </div>

                        <div class="mt-3">

                            <h3 class="fs-5 fw-semibold">Conocimientos</h3>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>PHP</li>
                                <li>Vue</li>
                                <li>Laravel</li>
                                <li>Bases de datos relacionales (MySQL, MariaDB)</li>
                            </ul>

                            <h3 class="fs-5 fw-semibold">Software</h3>
                            <ul>
                                <li>Photoshop</li>
                                <li>Illustrator</li>
                            </ul>

                            <h3 class="fs-5 fw-semibold">Idiomas</h3>
                            <ul>
                                <li>Español</li>
                                <li>Inglés avanzado</li>
                            </ul>

                            <h3 class="fs-5 fw-semibold">Redes Sociales</h3>
                            <ul>
                                <li><a href="https://www.instagram.com/" class="link-offset-2 link-underline link-underline-opacity-0" target="_blank">Instagram</a></li>
                                <li><a href="https://www.twitter.com/" class="link-offset-2 link-underline link-underline-opacity-0" target="_blank">Twitter</a></li>
                                <li><a href="https://www.facebook.com/" class="link-offset-2 link-underline link-underline-opacity-0" target="_blank">Facebook</a></li>
                            </ul>
                        </div>
                    </div>

                </div>`

    return html;

}

export {
    createPage,
}