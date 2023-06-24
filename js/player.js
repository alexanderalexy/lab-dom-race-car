class Player {
    constructor(gameScreen) {
        this.gameScreen = gameScreen;
        this.width = 80;
        this.height = 150;
        this.top = 450;
        this.left = 310;
        this.directionX = 0;
        this.directionY = 0;
        this.element = document.createElement('img');

        this.element.src = './images/car.png';
        this.element.style.position = 'absolute';

        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;


        this.element.style.top = `${this.top}px`;
        this.element.style.left = `${this.left}px`;

    
        this.gameScreen.appendChild(this.element);
    }

    move() {
        this.left += this.directionX;
        this.top += this.directionY;
        if(this.left < 50) {
            this.left = 50;
        }

        if(this.top < 0) {
            this.top = 0;
        }

         // handles right hand side
        if (this.left > this.gameScreen.offsetWidth - this.width - 50) {
            this.left = this.gameScreen.offsetWidth - this.width - 50;
        }

        // handles bottom side
        if (this.top > this.gameScreen.offsetHeight - this.height - 10) {
        this.top = this.gameScreen.offsetHeight - this.height - 10;
        }
  




 // Call this function, when the car moves
    this.updatePosition();
    }
// Update the player's car position on the screen
    updatePosition() {
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
      }
// Update the player's car position on the screen
      didCollide(obstacle) {
        const playerRect = this.element.getBoundingClientRect();
        const obstacleRect = obstacle.element.getBoundingClientRect();
    
        if (
          playerRect.left < obstacleRect.right &&
          playerRect.right > obstacleRect.left &&
          playerRect.top < obstacleRect.bottom &&
          playerRect.bottom > obstacleRect.top
        ) {
          console.log("Crash!");
          return true;
        } else {
          return false;
        }
      }
}