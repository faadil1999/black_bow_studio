<template>
  <div class="gamer-zone">
    <!-- Tubes néon gauche et droite -->
    <div 
      class="neon-tube left" 
      :style="{ opacity: leftTubeOpacity }"
    ></div>
    <div 
      class="neon-tube right" 
      :style="{ opacity: rightTubeOpacity }"
    ></div>

    <!-- Lampe suspendue centrale -->
    <div class="lamp-container" :style="lampSwingStyle">
      <div class="lamp-wire"></div>
      <div class="lamp-shade"></div>
      <div class="light-blob" :style="{ opacity: blobOpacity }"></div>
    </div>

    <!-- Contenu principal -->
    <div class="content">
      <h2 class="welcome">WELCOME TO</h2>
      <h1 class="title">GAMERZONE</h1>
      <p class="subtitle">- LATEST NEWS & REVIEWS -</p>
      
      <div class="buttons">
        <button class="btn btn-primary">LATEST NEWS</button>
        <button class="btn btn-secondary">TOP REVIEWS</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted,computed } from 'vue';

// État pour les animations
const leftTubeOpacity = ref(1);
const rightTubeOpacity = ref(1);
const blobOpacity = ref(0.9);
const lampSwingAngle = ref(0);

// Intervalles
let tubeInterval;
let blobInterval;
let swingInterval;

// Style calculé pour le balancement de la lampe
const lampSwingStyle = computed(() => ({
  transform: `rotate(${lampSwingAngle.value}deg)`,
  transformOrigin: 'top center'
}));

// Animation des tubes néon (clignotement horreur)
const animateTubes = () => {
  const randomFlicker = () => {
    // Clignotement aléatoire gauche
    if (Math.random() > 0.7) {
      leftTubeOpacity.value = Math.random() * 0.3;
      setTimeout(() => {
        leftTubeOpacity.value = Math.random() > 0.5 ? 1 : 0.6;
      }, Math.random() * 100 + 50);
    }

    // Clignotement aléatoire droite
    if (Math.random() > 0.7) {
      rightTubeOpacity.value = Math.random() * 0.3;
      setTimeout(() => {
        rightTubeOpacity.value = Math.random() > 0.5 ? 1 : 0.6;
      }, Math.random() * 100 + 50);
    }
  };

  tubeInterval = setInterval(randomFlicker, 150);
};

// Animation du blob lumineux
const animateBlob = () => {
  blobInterval = setInterval(() => {
    blobOpacity.value = 0.7 + Math.random() * 0.3;
  }, 100);
};

// Animation du balancement de la lampe
const animateSwing = () => {
  let angle = 0;
  let direction = 1;
  const speed = 0.02;
  const maxAngle = 3;

  const swing = () => {
    angle += speed * direction;
    
    if (angle >= maxAngle || angle <= -maxAngle) {
      direction *= -1;
    }
    
    lampSwingAngle.value = angle;
  };

  swingInterval = setInterval(swing, 16);
};

onMounted(() => {
  animateTubes();
  animateBlob();
  animateSwing();
});

onUnmounted(() => {
  clearInterval(tubeInterval);
  clearInterval(blobInterval);
  clearInterval(swingInterval);
});
</script>

<style scoped>
.gamer-zone {
  position: relative;
  width: 100%;
  height: 100vh;
  background: 
    linear-gradient(rgba(20, 10, 30, 0.8), rgba(40, 20, 30, 0.9)),
    url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4"/></filter><rect width="400" height="400" filter="url(%23noise)" opacity="0.3"/></svg>');
  background-size: cover;
  background-position: center;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Tubes néon latéraux */
.neon-tube {
  position: absolute;
  width: 20px;
  height: 80%;
  top: 10%;
  border-radius: 10px;
  transition: opacity 0.05s ease;
}

.neon-tube.left {
  left: 5%;
  background: linear-gradient(to bottom, 
    rgba(100, 100, 255, 0.3),
    rgba(100, 100, 255, 0.9),
    rgba(100, 100, 255, 0.3)
  );
  box-shadow: 
    0 0 20px rgba(100, 100, 255, 0.8),
    0 0 40px rgba(100, 100, 255, 0.6),
    0 0 60px rgba(100, 100, 255, 0.4);
}

.neon-tube.right {
  right: 5%;
  background: linear-gradient(to bottom, 
    rgba(150, 50, 255, 0.3),
    rgba(150, 50, 255, 0.9),
    rgba(150, 50, 255, 0.3)
  );
  box-shadow: 
    0 0 20px rgba(150, 50, 255, 0.8),
    0 0 40px rgba(150, 50, 255, 0.6),
    0 0 60px rgba(150, 50, 255, 0.4);
}

/* Lampe suspendue */
.lamp-container {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  transition: transform 0.1s ease-out;
}

.lamp-wire {
  width: 2px;
  height: 120px;
  background: linear-gradient(to bottom, #333, #111);
  margin: 0 auto;
}

.lamp-shade {
  width: 140px;
  height: 80px;
  background: linear-gradient(to bottom, #1a1a1a, #0a0a0a);
  border-radius: 0 0 70px 70px;
  margin: 0 auto;
  position: relative;
  box-shadow: 
    inset 0 -5px 20px rgba(255, 150, 50, 0.3),
    0 10px 40px rgba(0, 0, 0, 0.8);
}

.lamp-shade::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  height: 20px;
  background: radial-gradient(ellipse, rgba(255, 150, 50, 0.8), transparent);
}

.light-blob {
  position: absolute;
  top: 180px;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 400px;
  background: radial-gradient(ellipse at center top,
    rgba(255, 180, 100, 0.4) 0%,
    rgba(255, 150, 80, 0.3) 20%,
    rgba(255, 120, 60, 0.15) 40%,
    transparent 70%
  );
  filter: blur(30px);
  pointer-events: none;
  transition: opacity 0.1s;
}

/* Contenu */
.content {
  position: relative;
  z-index: 20;
  text-align: center;
  padding: 2rem;
}

.welcome {
  font-family: 'Arial', sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  letter-spacing: 4px;
  color: #fff;
  margin: 0 0 0.5rem 0;
  text-transform: uppercase;
}

.title {
  font-family: 'Arial Black', sans-serif;
  font-size: 5rem;
  font-weight: 900;
  letter-spacing: 8px;
  margin: 0;
  background: linear-gradient(to bottom, #fff, #a8d5ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 
    0 0 40px rgba(100, 150, 255, 0.8),
    0 0 80px rgba(100, 150, 255, 0.6),
    0 0 120px rgba(100, 150, 255, 0.4);
  filter: drop-shadow(0 0 20px rgba(100, 150, 255, 0.9));
  animation: neonPulse 2s ease-in-out infinite;
}

.subtitle {
  font-family: 'Arial', sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  letter-spacing: 3px;
  color: #d580ff;
  margin: 1rem 0 3rem 0;
  text-transform: uppercase;
}

.buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 0.9rem 2.5rem;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  border: 2px solid;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: transparent;
  font-family: 'Arial', sans-serif;
}

.btn-primary {
  color: #5dcaff;
  border-color: #5dcaff;
  box-shadow: 0 0 20px rgba(93, 202, 255, 0.3);
}

.btn-primary:hover {
  background: rgba(93, 202, 255, 0.1);
  box-shadow: 0 0 30px rgba(93, 202, 255, 0.6);
  transform: translateY(-2px);
}

.btn-secondary {
  color: #d580ff;
  border-color: #d580ff;
  box-shadow: 0 0 20px rgba(213, 128, 255, 0.3);
}

.btn-secondary:hover {
  background: rgba(213, 128, 255, 0.1);
  box-shadow: 0 0 30px rgba(213, 128, 255, 0.6);
  transform: translateY(-2px);
}

@keyframes neonPulse {
  0%, 100% {
    filter: drop-shadow(0 0 20px rgba(100, 150, 255, 0.9));
  }
  50% {
    filter: drop-shadow(0 0 35px rgba(100, 150, 255, 1));
  }
}

/* Responsive */
@media (max-width: 768px) {
  .title {
    font-size: 3rem;
  }
  
  .light-blob {
    width: 200px;
    height: 300px;
  }
  
  .neon-tube {
    width: 15px;
  }
}
</style>