<template>
  <div class="horror-lamp-scene">
    <!-- Mur fissuré -->
    <div class="wall-background">
      <svg class="cracks">
        <path d="M 200 0 Q 205 100 210 200 T 220 400 L 225 600" 
          stroke="#050505" stroke-width="2" fill="none" opacity="0.8"/>
        <path d="M 600 100 Q 595 200 590 300 T 580 500 L 575 700" 
          stroke="#050505" stroke-width="3" fill="none" opacity="0.9"/>
        <path d="M 400 0 L 405 150 Q 410 250 415 350 L 420 600" 
          stroke="#000" stroke-width="1.5" fill="none" opacity="0.7"/>
        <path d="M 800 200 Q 790 300 785 400 L 780 600" 
          stroke="#050505" stroke-width="2.5" fill="none" opacity="0.8"/>
      </svg>
    </div>

    <!-- Point d'attache au plafond -->
    <div class="ceiling-mount"></div>

    <!-- Lampe qui balance -->
    <div class="lamp-container" @click="toggleLight">
      <!-- Câble -->
      <div class="cable"></div>

      <!-- Halo de lumière -->
      <div 
        class="light-glow"
        :style="{
          background: `radial-gradient(circle, rgba(255, 200, 100, ${lightIntensity * 0.3}) 0%, rgba(255, 150, 50, ${lightIntensity * 0.15}) 30%, transparent 70%)`,
          opacity: lightIntensity
        }"
      ></div>

      <!-- Corps de la lampe (forme dôme industriel) -->
      <div class="lamp-body">
        <!-- Haut de la lampe (culot) -->
        <div class="lamp-socket"></div>
        
        <!-- Dôme de la lampe -->
        <div class="lamp-dome">
          <div 
            class="lamp-interior"
            :style="{
              background: isLightOn && !flicker 
                ? 'radial-gradient(circle at center, rgba(255, 220, 150, 0.9), rgba(255, 150, 50, 0.6), transparent)'
                : 'radial-gradient(circle at center, rgba(100, 100, 100, 0.3), transparent)',
              boxShadow: isLightOn && !flicker 
                ? 'inset 0 0 30px rgba(255, 200, 100, 0.8)'
                : 'none'
            }"
          ></div>

          <!-- Ampoule visible -->
          <div 
            class="bulb"
            :style="{
              background: isLightOn && !flicker
                ? 'radial-gradient(circle, rgba(255, 240, 200, 1), rgba(255, 200, 100, 0.8))'
                : 'radial-gradient(circle, rgba(80, 80, 80, 0.5), rgba(40, 40, 40, 0.8))',
              boxShadow: isLightOn && !flicker
                ? '0 0 20px rgba(255, 200, 100, 0.8), 0 0 40px rgba(255, 150, 50, 0.4)'
                : 'none'
            }"
          ></div>

          <!-- Reflet sur le dôme -->
          <div class="lamp-highlight"></div>
        </div>
      </div>
    </div>

    <!-- Blob au sol (ombre projetée) -->
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

    <!-- Instructions -->
    <div class="instructions">
      [ CLIQUEZ SUR LA LAMPE ]
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
      flickerInterval: null,
      blobInterval: null
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
    }
  },
  mounted() {
    this.startFlicker();
    this.startBlobAnimation();
  },
  beforeUnmount() {
    if (this.flickerInterval) clearInterval(this.flickerInterval);
    if (this.blobInterval) clearInterval(this.blobInterval);
  }
};
</script>

<style scoped>
.horror-lamp-scene {
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 500px;
  background: #2a2a2a;
  overflow: hidden;
}

.wall-background {
  position: absolute;
  inset: 0;
  opacity: 0.6;
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    repeating-linear-gradient(
      90deg,
      #1a1a1a 0px,
      #0d0d0d 1px,
      #1a1a1a 2px,
      #1a1a1a 40px
    ),
    repeating-linear-gradient(
      0deg,
      #1a1a1a 0px,
      #0d0d0d 1px,
      #1a1a1a 2px,
      #1a1a1a 40px
    );
}

.cracks {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0.4;
}

.ceiling-mount {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: clamp(16px, 3vw, 24px);
  height: clamp(16px, 3vw, 24px);
  background: #18181b;
  border-radius: 50%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  border: 2px solid #3f3f46;
  z-index: 10;
}

.lamp-container {
  position: absolute;
  top: 0;
  left: 50%;
  transform-origin: top center;
  cursor: pointer;
  transition: transform 0.3s ease;
  animation: swing 4s ease-in-out infinite;
}

.lamp-container:hover {
  animation-play-state: paused;
}

@keyframes swing {
  0%, 100% { 
    transform: translateX(-50%) rotate(-8deg);
  }
  50% { 
    transform: translateX(-50%) rotate(8deg);
  }
}

.cable {
  width: clamp(2px, 0.5vw, 3px);
  height: clamp(120px, 25vh, 200px);
  margin: 0 auto;
  background: linear-gradient(to bottom, #2a2a2a, #1a1a1a);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
}

.light-glow {
  position: absolute;
  top: clamp(120px, 25vh, 200px);
  left: 50%;
  transform: translateX(-50%);
  width: clamp(300px, 60vw, 500px);
  height: clamp(300px, 60vw, 500px);
  border-radius: 50%;
  pointer-events: none;
  transition: opacity 0.3s ease;
  filter: blur(60px);
}

.lamp-body {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: clamp(100px, 18vw, 180px);
}

.lamp-socket {
  width: clamp(35px, 6vw, 60px);
  height: clamp(30px, 5vw, 50px);
  background: linear-gradient(to bottom, #2a2a2a 0%, #1a1a1a 60%, #2a2a2a 100%);
  margin: 0 auto;
  border-radius: 8px 8px 0 0;
  box-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.5),
    inset 0 2px 4px rgba(255, 255, 255, 0.1);
  position: relative;
}

.lamp-socket::before {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  height: 8px;
  background: #1a1a1a;
  border-radius: 50%;
}

.lamp-dome {
  position: relative;
  width: 100%;
  height: clamp(100px, 18vw, 180px);
  background: linear-gradient(to bottom, #4a4a4a 0%, #3a3a3a 30%, #2a2a2a 70%, #1a1a1a 100%);
  border-radius: 50% 50% 48% 48% / 55% 55% 45% 45%;
  box-shadow: 
    0 15px 50px rgba(0, 0, 0, 0.9),
    inset 0 -8px 20px rgba(0, 0, 0, 0.6),
    inset 0 2px 8px rgba(255, 255, 255, 0.1);
  overflow: hidden;
  border: 2px solid #1a1a1a;
}

.lamp-interior {
  position: absolute;
  inset: 0;
  border-radius: 50% 50% 48% 48% / 55% 55% 45% 45%;
  transition: all 0.3s ease;
}

/* Bordure intérieure éclairée */
.lamp-dome::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 98%;
  height: 15px;
  background: linear-gradient(to top, 
    rgba(200, 200, 200, 0.8) 0%,
    rgba(150, 150, 150, 0.4) 50%,
    transparent 100%);
  border-radius: 0 0 50% 50%;
}

.bulb {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: clamp(35px, 7vw, 60px);
  height: clamp(35px, 7vw, 60px);
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
    rgba(255, 255, 255, 0.4) 0%, 
    rgba(255, 255, 255, 0.2) 40%,
    transparent 100%);
  border-radius: 60% 40% 50% 50% / 60% 50% 50% 40%;
  filter: blur(4px);
  pointer-events: none;
}

.blob-container {
  position: absolute;
  bottom: clamp(40px, 8vh, 60px);
  left: 50%;
  transform: translateX(-50%);
  pointer-events: none;
  transition: transform 2s ease-in-out;
}

.blob-shadow {
  width: clamp(120px, 25vw, 220px);
  height: clamp(20px, 4vw, 35px);
  background: radial-gradient(ellipse at center, 
    rgba(0, 0, 0, 0.8) 0%, 
    rgba(0, 0, 0, 0.4) 50%, 
    transparent 100%);
  border-radius: 50%;
  transition: all 0.3s ease;
  animation: shadowPulse 4s ease-in-out infinite;
}

@keyframes shadowPulse {
  0%, 100% { 
    transform: scaleX(1);
  }
  50% { 
    transform: scaleX(1.05);
  }
}

.instructions {
  position: absolute;
  bottom: clamp(16px, 4vh, 32px);
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: #dc2626;
  font-size: clamp(10px, 2vw, 14px);
  letter-spacing: clamp(1px, 0.3vw, 2px);
  animation: pulse 2s ease-in-out infinite;
  padding: 0 20px;
  white-space: nowrap;
}

@keyframes pulse {
  0%, 100% { 
    opacity: 0.6;
  }
  50% { 
    opacity: 1;
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  @keyframes swing {
    0%, 100% { 
      transform: translateX(-50%) rotate(-5deg);
    }
    50% { 
      transform: translateX(-50%) rotate(5deg);
    }
  }
}

@media (max-width: 480px) {
  .instructions {
    white-space: normal;
  }
  
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