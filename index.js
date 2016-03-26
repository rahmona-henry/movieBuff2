<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">

  <title>Movie Buff</title>
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="animate.css">
  <script src="http://code.jquery.com/jquery-1.12.0.min.js"></script>
  <script src="./bundle.js"></script>


</head>

<body>
  <div id='container'>
    <h1 class="title">movieBuff.io</h1>
      <p> Type in the name of your favourite actor and hit 'search' to see their best films!</p>
      <form id="inputForm">
    <!--     Type Actor Here: <br><br> -->
        <input id="searchInput" type ="text" name="actor">

      </form>

       <button id="button" type="button">Search</button>
      <div id='results'>
      </div>

  </div>

</body>
</html>
