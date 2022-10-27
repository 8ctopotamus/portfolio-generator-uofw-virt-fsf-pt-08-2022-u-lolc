const generateHTML = (data) => {
  console.log(data)
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
      <title>Josh's Portfolio</title>
    </head>
    <body>
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <img src="" class="img-fluid" alt="Picture of Josh" />
          </div>
          <div class="col-md-6">
            <h1>Josh's Portfolio</h1>
            <h2>Milwaukee</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At perferendis numquam enim possimus quod sit voluptas excepturi. Dolorem nemo, porro veniam debitis minima inventore provident ut, quos, vero sit itaque.</p>
            <a href="#">
              <i class="bi bi-github fs-3"></i>
            </a>
            <a href="#">
              <i class="bi bi-linkedin fs-3"></i>
            </a>
          </div>
        </div>
      </div>
    </body>
    </html>
  `
}

module.exports = generateHTML