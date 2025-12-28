<template>
  <div class="horror-lamp-scene">
    <!-- Mur fissuré en arrière-plan -->
    <div class="wall-background">
      <svg class="cracks">
        <!-- Fissures principales -->
        <path d="M 100 0 L 120 150 Q 140 300 160 450 L 180 800" 
          stroke="#000" stroke-width="3" fill="none" opacity="0.9"/>
        <path d="M 300 100 Q 320 250 340 400 L 360 800" 
          stroke="#0a0a0a" stroke-width="2" fill="none" opacity="0.8"/>
        <path d="M 500 0 L 510 200 Q 520 400 530 600 L 540 800" 
          stroke="#000" stroke-width="2.5" fill="none" opacity="0.85"/>
        <path d="M 700 150 Q 710 350 720 550 L 730 800" 
          stroke="#0a0a0a" stroke-width="2" fill="none" opacity="0.8"/>
        <path d="M 900 50 L 910 250 Q 920 450 930 650 L 940 800" 
          stroke="#000" stroke-width="3" fill="none" opacity="0.9"/>
        
        <!-- Fissures secondaires -->
        <path d="M 200 200 Q 180 250 160 300" 
          stroke="#0a0a0a" stroke-width="1.5" fill="none" opacity="0.6"/>
        <path d="M 400 300 Q 380 350 360 400" 
          stroke="#0a0a0a" stroke-width="1.5" fill="none" opacity="0.6"/>
        <path d="M 600 250 Q 580 300 560 350" 
          stroke="#0a0a0a" stroke-width="1.5" fill="none" opacity="0.6"/>
        <path d="M 800 350 Q 780 400 760 450" 
          stroke="#0a0a0a" stroke-width="1.5" fill="none" opacity="0.6"/>
      </svg>
    </div>

    <!-- Tube néon gauche -->
    <div class="neon-left" :class="{ 'neon-flicker': flickerLeft, 'neon-off': !neonLeftOn }">
      <div class="neon-tube"></div>
      <div class="neon-glow"></div>
    </div>

    <!-- Tube néon droit -->
    <div class="neon-right" :class="{ 'neon-flicker': flickerRight, 'neon-off': !neonRightOn }">
      <div class="neon-tube"></div>
      <div class="neon-glow"></div>
    </div>

    <!-- Point d'attache au plafond -->
    <div class="ceiling-mount"></div>

    <!-- Lampe centrale qui balance -->
    <div class="lamp-container" @click="toggleLight">
      <!-- Câble -->
      <div class="cable"></div>

      <!-- Halo de lumière -->
      <div 
        class="light-glow"
        :style="{
          background: `radial-gradient(circle, rgba(255, 200, 100, ${lightIntensity * 0.4}) 0%, rgba(255, 150, 50, ${lightIntensity * 0.2}) 40%, transparent 70%)`,
          opacity: lightIntensity
        }"
      ></div>

      <!-- Corps de la lampe -->
      <div class="lamp-body">
        <div class="lamp-socket"></div>
        
        <div class="lamp-dome">
          <div 
            class="lamp-interior"
            :style="{
              background: isLightOn && !flicker 
                ? 'radial-gradient(circle at center, rgba(255, 220, 150, 0.95), rgba(255, 180, 80, 0.7), rgba(255, 150, 50, 0.3))'
                : 'radial-gradient(circle at center, rgba(60, 60, 60, 0.4), transparent)',
              boxShadow: isLightOn && !flicker 
                ? 'inset 0 0 40px rgba(255, 200, 100, 0.9)'
                : 'none'
            }"
          ></div>

          <div 
            class="bulb"
            :style="{
              background: isLightOn && !flicker
                ? 'radial-gradient(circle, rgba(255, 245, 220, 1) 0%, rgba(255, 220, 150, 0.9) 60%, rgba(255, 180, 80, 0.6) 100%)'
                : 'radial-gradient(circle, rgba(80, 80, 80, 0.5), rgba(40, 40, 40, 0.8))',
              boxShadow: isLightOn && !flicker
                ? '0 0 30px rgba(255, 220, 150, 0.9), 0 0 60px rgba(255, 180, 80, 0.5)'
                : 'none'
            }"
          ></div>

          <div class="lamp-highlight"></div>
        </div>
      </div>
    </div>

    <!-- Ombre au sol -->
    <div 
      class="blob-container"
      :style="{ transform: `translateX(-50%) scale(${blobScale})` }"
    >
      <div 
        class="blob-shadow"
        :style="{
          opacity: isLightOn && !flicker ? 0.9 : 0.3,
          filter: isLightOn && !flicker ? 'blur(20px)' : 'blur(10px)'
        }"
      ></div>
    </div>

    <!-- Contenu central -->
    <div class="content-overlay">
      <h2 class="welcome-text">WELCOME TO</h2>
      <h1 class="title-text">GAMERZONE</h1>
      <p class="subtitle-text">LATEST NEWS & REVIEWS</p>
      
      <div class="button-group">
        <button class="game-button button-cyan">LATEST NEWS</button>
        <button class="game-button button-magenta">TOP REVIEWS</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HorrorLampScene',
  data() {
    return {
      isLightOn: true,
      flicker: false,
      blobScale: 1,
      neonLeftOn: true,
      neonRightOn: true,
      flickerLeft: false,
      flickerRight: false,
      flickerInterval: null,
      blobInterval: null,
      neonInterval: null
    };
  },
  computed: {
    lightIntensity() {
      return this.isLightOn && !this.flicker ? 1 : 0;
    }
  },
  methods: {
    toggleLight() {
      this.isLightOn = !this.isLightOn;
      this.$emit('light-toggled', this.isLightOn);
    },
    startFlicker() {
      this.flickerInterval = setInterval(() => {
        if (Math.random() > 0.7) {
          this.flicker = true;
          setTimeout(() => {
            this.flicker = false;
          }, Math.random() * 200 + 50);
        }
      }, 3000);
    },
    startBlobAnimation() {
      this.blobInterval = setInterval(() => {
        this.blobScale = 0.98 + Math.random() * 0.04;
      }, 2000);
    },
    startNeonHorror() {
      this.neonInterval = setInterval(() => {
        // Scénario d'horreur aléatoire
        const scenario = Math.random();
        
        if (scenario > 0.85) {
          // Éteindre les deux néons brutalement
          this.neonLeftOn = false;
          this.neonRightOn = false;
          setTimeout(() => {
            this.neonLeftOn = true;
            this.neonRightOn = true;
          }, Math.random() * 1000 + 500);
        } else if (scenario > 0.7) {
          // Éteindre le gauche
          this.flickerLeft = true;
          this.neonLeftOn = false;
          setTimeout(() => {
            this.neonLeftOn = true;
            this.flickerLeft = false;
          }, Math.random() * 800 + 300);
        } else if (scenario > 0.55) {
          // Éteindre le droit
          this.flickerRight = true;
          this.neonRightOn = false;
          setTimeout(() => {
            this.neonRightOn = true;
            this.flickerRight = false;
          }, Math.random() * 800 + 300);
        } else if (scenario > 0.4) {
          // Scintillement rapide gauche
          this.flickerLeft = true;
          setTimeout(() => {
            this.flickerLeft = false;
          }, Math.random() * 300 + 100);
        } else if (scenario > 0.25) {
          // Scintillement rapide droit
          this.flickerRight = true;
          setTimeout(() => {
            this.flickerRight = false;
          }, Math.random() * 300 + 100);
        }
      }, 4000);
    }
  },
  mounted() {
    this.startFlicker();
    this.startBlobAnimation();
    this.startNeonHorror();
  },
  beforeUnmount() {
    if (this.flickerInterval) clearInterval(this.flickerInterval);
    if (this.blobInterval) clearInterval(this.blobInterval);
    if (this.neonInterval) clearInterval(this.neonInterval);
  }
};
</script>

<style scoped>
.horror-lamp-scene {
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 600px;
  background: linear-gradient(to bottom, #1a0a1a 0%, #2a1020 50%, #1a0a1a 100%);
  overflow: hidden;
}

.wall-background {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(20, 10, 20, 0.8), rgba(30, 15, 25, 0.8)),
    repeating-linear-gradient(
      90deg,
      #2a1520 0px,
      #1a0a15 1px,
      #2a1520 2px,
      #2a1520 50px
    ),
    repeating-linear-gradient(
      0deg,
      #2a1520 0px,
      #1a0a15 1px,
      #2a1520 2px,
      #2a1520 50px
    );
}

.cracks {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
}

/* Tubes néon */
.neon-left,
.neon-right {
  position: absolute;
  top: 10%;
  width: clamp(8px, 1.5vw, 15px);
  height: clamp(400px, 60vh, 600px);
  transition: all 0.3s ease;
}

.neon-left {
  left: clamp(30px, 5vw, 80px);
}

.neon-right {
  right: clamp(30px, 5vw, 80px);
}

.neon-tube {
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, #4a00ff 0%, #7700ff 50%, #4a00ff 100%);
  border-radius: 20px;
  box-shadow: 
    0 0 10px rgba(74, 0, 255, 0.5),
    0 0 20px rgba(119, 0, 255, 0.3),
    inset 0 0 5px rgba(255, 255, 255, 0.2);
  transition: all 0.2s ease;
}

.neon-glow {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: clamp(40px, 8vw, 80px);
  height: 100%;
  background: radial-gradient(ellipse at center, rgba(119, 0, 255, 0.4) 0%, transparent 70%);
  filter: blur(20px);
  pointer-events: none;
  transition: opacity 0.2s ease;
}

.neon-off .neon-tube {
  background: linear-gradient(to bottom, #1a1a2a 0%, #0a0a1a 50%, #1a1a2a 100%);
  box-shadow: none;
}

.neon-off .neon-glow {
  opacity: 0;
}

.neon-flicker .neon-tube {
  animation: neonFlicker 0.1s infinite;
}

@keyframes neonFlicker {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

.ceiling-mount {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: clamp(20px, 3vw, 30px);
  height: clamp(20px, 3vw, 30px);
  background: #0a0a0a;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
  border: 2px solid #1a1a1a;
  z-index: 10;
}

.lamp-container {
  position: absolute;
  top: 0;
  left: 50%;
  transform-origin: top center;
  cursor: pointer;
  animation: swing 4s ease-in-out infinite;
  z-index: 5;
}

@keyframes swing {
  0%, 100% { 
    transform: translateX(-50%) rotate(-6deg);
  }
  50% { 
    transform: translateX(-50%) rotate(6deg);
  }
}

.cable {
  width: clamp(3px, 0.6vw, 5px);
  height: clamp(80px, 15vh, 120px);
  margin: 0 auto;
  background: linear-gradient(to bottom, #1a1a1a, #0a0a0a);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);
}

.light-glow {
  position: absolute;
  top: clamp(80px, 15vh, 120px);
  left: 50%;
  transform: translateX(-50%);
  width: clamp(300px, 50vw, 500px);
  height: clamp(300px, 50vw, 500px);
  border-radius: 50%;
  pointer-events: none;
  transition: opacity 0.3s ease;
  filter: blur(60px);
}

.lamp-body {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: clamp(80px, 14vw, 140px);
}

.lamp-socket {
  width: clamp(30px, 5vw, 50px);
  height: clamp(25px, 4vw, 40px);
  background: linear-gradient(to bottom, #1a1a1a 0%, #0a0a0a 60%, #1a1a1a 100%);
  margin: 0 auto;
  border-radius: 6px 6px 0 0;
  box-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.7),
    inset 0 2px 4px rgba(255, 255, 255, 0.05);
}

.lamp-dome {
  position: relative;
  width: 100%;
  height: clamp(80px, 14vw, 140px);
  background: linear-gradient(to bottom, #2a2a2a 0%, #1a1a1a 60%, #0a0a0a 100%);
  border-radius: 50% 50% 48% 48% / 55% 55% 45% 45%;
  box-shadow: 
    0 15px 50px rgba(0, 0, 0, 0.95),
    inset 0 -8px 20px rgba(0, 0, 0, 0.7);
  overflow: hidden;
  border: 2px solid #0a0a0a;
}

.lamp-interior {
  position: absolute;
  inset: 0;
  border-radius: 50% 50% 48% 48% / 55% 55% 45% 45%;
  transition: all 0.3s ease;
}

.bulb {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: clamp(30px, 6vw, 50px);
  height: clamp(30px, 6vw, 50px);
  border-radius: 50%;
  transition: all 0.2s ease;
  z-index: 2;
}

.lamp-highlight {
  position: absolute;
  top: 20%;
  left: 20%;
  width: 35%;
  height: 40%;
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.3) 0%, 
    rgba(255, 255, 255, 0.15) 40%,
    transparent 100%);
  border-radius: 60% 40% 50% 50% / 60% 50% 50% 40%;
  filter: blur(4px);
  pointer-events: none;
}

.blob-container {
  position: absolute;
  bottom: clamp(200px, 28vh, 280px);
  left: 50%;
  transform: translateX(-50%);
  pointer-events: none;
  transition: transform 2s ease-in-out;
  z-index: 4;
}

.blob-shadow {
  width: clamp(100px, 20vw, 180px);
  height: clamp(18px, 3vw, 30px);
  background: radial-gradient(ellipse at center, 
    rgba(0, 0, 0, 0.9) 0%, 
    rgba(0, 0, 0, 0.5) 50%, 
    transparent 100%);
  border-radius: 50%;
  transition: all 0.3s ease;
}

/* Contenu central */
.content-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 3;
  width: 90%;
  max-width: 600px;
}

.welcome-text {
  font-size: clamp(14px, 2.5vw, 20px);
  color: #ffffff;
  font-weight: 600;
  letter-spacing: clamp(2px, 0.5vw, 4px);
  margin-bottom: clamp(10px, 2vh, 15px);
  text-transform: uppercase;
}

.title-text {
  font-size: clamp(36px, 8vw, 80px);
  font-weight: 900;
  background: linear-gradient(to right, #00d4ff 0%, #7700ff 50%, #ff00ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: clamp(2px, 0.5vw, 5px);
  margin-bottom: clamp(10px, 2vh, 15px);
  text-transform: uppercase;
  text-shadow: 
    0 0 20px rgba(0, 212, 255, 0.5),
    0 0 40px rgba(119, 0, 255, 0.3);
  filter: drop-shadow(0 0 10px rgba(0, 212, 255, 0.5));
}

.subtitle-text {
  font-size: clamp(12px, 2vw, 16px);
  color: #ff00ff;
  font-weight: 600;
  letter-spacing: clamp(1px, 0.3vw, 3px);
  margin-bottom: clamp(20px, 4vh, 35px);
  text-transform: uppercase;
}

.button-group {
  display: flex;
  gap: clamp(15px, 3vw, 25px);
  justify-content: center;
  flex-wrap: wrap;
}

.game-button {
  padding: clamp(10px, 2vh, 15px) clamp(25px, 5vw, 40px);
  font-size: clamp(11px, 1.8vw, 14px);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: clamp(1px, 0.2vw, 2px);
  border: 2px solid;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
}

.button-cyan {
  background: transparent;
  color: #00d4ff;
  border-color: #00d4ff;
  box-shadow: 0 0 15px rgba(0, 212, 255, 0.3);
}

.button-cyan:hover {
  background: #00d4ff;
  color: #000;
  box-shadow: 0 0 25px rgba(0, 212, 255, 0.6);
  transform: translateY(-2px);
}

.button-magenta {
  background: #7700ff;
  color: #fff;
  border-color: #ff00ff;
  box-shadow: 0 0 15px rgba(255, 0, 255, 0.4);
}

.button-magenta:hover {
  background: #ff00ff;
  box-shadow: 0 0 25px rgba(255, 0, 255, 0.7);
  transform: translateY(-2px);
}

/* Responsive */
@media (max-width: 768px) {
  @keyframes swing {
    0%, 100% { 
      transform: translateX(-50%) rotate(-4deg);
    }
    50% { 
      transform: translateX(-50%) rotate(4deg);
    }
  }
  
  .button-group {
    flex-direction: column;
    align-items: center;
  }
  
  .game-button {
    width: 80%;
    max-width: 250px;
  }
}

@media (max-width: 480px) {
  @keyframes swing {
    0%, 100% { 
      transform: translateX(-50%) rotate(-3deg);
    }
    50% { 
      transform: translateX(-50%) rotate(3deg);
    }
  }
}
</style>