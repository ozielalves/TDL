<div class="intro-logo">
  <div class="title">
      <i class="fas fa-stream"></i>
      <h1>To Do List</h1>
  </div>
  <p>What can't you forget to do today?</p>
</div>

<style>
.intro-logo {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  text-align: center;
  font-size: 1.5rem;
  -webkit-box-shadow: -20px -12px 0px #222231;
          box-shadow: -20px -12px 0px #222231;
  padding: 2rem;
  margin: 2rem 0 0 0;
  border-style: solid;
  border-radius: 5px;
  background: white;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  position: absolute;
  /* width: 500px;
  height: 300px; */
  width: 433px;
  height: 217.734px;
  left: 10%;
  bottom: 29%;
  z-index: 7;
  -webkit-animation: float 3s ease-in-out infinite;
          animation: float 3s ease-in-out infinite;
}

.intro-logo .title {
  justify-self: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 1rem 0;
}

.intro-logo .title i {
  position: relative;
  -ms-flex-item-align: center;
      -ms-grid-row-align: center;
      align-self: center;
  margin: 1rem;
}

.intro-logo p {
  font-family: "Playfair Display", serif;
}

/* Animation  */
@-webkit-keyframes float {
  0% {
    -webkit-transform: translatey(0px);
            transform: translatey(0px);
  }
  50% {
    -webkit-transform: translatey(-10px);
            transform: translatey(-10px);
  }
  100% {
    -webkit-transform: translatey(0px);
            transform: translatey(0px);
  }
}
@keyframes float {
  0% {
    -webkit-transform: translatey(0px);
            transform: translatey(0px);
  }
  50% {
    -webkit-transform: translatey(-10px);
            transform: translatey(-10px);
  }
  100% {
    -webkit-transform: translatey(0px);
            transform: translatey(0px);
  }
}
/*# sourceMappingURL=styles.css.map */
</style>