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

      <!-- Corps de la lampe -->
      <div class="lamp-body">
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

        <!-- Ampoule -->
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
      </div>
    </div>

    <!-- Blob au sol -->
    <div 
      class="blob-container"
      :style="{ transform: `translateX(-50%) scale(${blobScale})` }"
    >
      <div 
        class="blob"
        :style="{
          background: isLightOn && !flicker
            ? 'radial-gradient(ellipse at center, rgba(139, 0, 0, 0.8), rgba(80, 0, 0, 0.6), rgba(40, 0, 0, 0.4), transparent)'
            : 'radial-gradient(ellipse at center, rgba(60, 0, 0, 0.9), rgba(30, 0, 0, 0.7), rgba(15, 0, 0, 0.5), transparent)'
        }"
      >
        <div class="blob-detail"></div>
      </div>
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
        this.blobScale = 0.95 + Math.random() * 0.1;
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
  background: black;
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
    transform: translateX(-50%) rotate(-4deg);
  }
  50% { 
    transform: translateX(-50%) rotate(4deg);
  }
}

.cable {
  width: clamp(2px, 0.5vw, 4px);
  height: clamp(100px, 25vh, 260px);
  margin: 0 auto;
  background: linear-gradient(to bottom, #27272a, #18181b);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
}

.light-glow {
  position: absolute;
  top: clamp(100px, 20vh, 160px);
  left: 50%;
  transform: translateX(-50%);
  width: clamp(200px, 50vw, 384px);
  height: clamp(200px, 50vw, 384px);
  border-radius: 50%;
  pointer-events: none;
  transition: opacity 0.3s ease;
  filter: blur(40px);
}

.lamp-body {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: clamp(80px, 15vw, 128px);
  height: clamp(60px, 12vw, 96px);
  background: linear-gradient(to bottom, #18181b, #27272a, #3f3f46);
  border-radius: 0 0 50% 50%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.9);
  border-top: clamp(2px, 0.5vw, 4px) solid #18181b;
}

.lamp-interior {
  position: absolute;
  inset: 0;
  border-radius: 0 0 50% 50%;
  transition: all 0.3s ease;
}

.bulb {
  position: absolute;
  top: clamp(4px, 1vw, 8px);
  left: 50%;
  transform: translateX(-50%);
  width: clamp(25px, 5vw, 40px);
  height: clamp(35px, 7vw, 56px);
  border-radius: 50%;
  transition: all 0.2s ease;
}

.blob-container {
  position: absolute;
  bottom: clamp(40px, 10vh, 80px);
  left: 50%;
  transform: translateX(-50%);
  pointer-events: none;
  transition: transform 2s ease-in-out;
}

.blob {
  position: relative;
  width: clamp(150px, 35vw, 256px);
  height: clamp(75px, 17vw, 128px);
  border-radius: 50%;
  filter: blur(8px);
  transition: all 0.3s ease;
  animation: pulse 4s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 0.8; }
  50% { opacity: 1; }
}

.blob-detail {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: clamp(110px, 25vw, 192px);
  height: clamp(55px, 13vw, 96px);
  background: radial-gradient(ellipse at center, rgba(100, 0, 0, 0.6), transparent);
  filter: blur(4px);
  border-radius: 50%;
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

/* Responsive adjustments */
@media (max-width: 768px) {
  @keyframes swing {
    0%, 100% { 
      transform: translateX(-50%) rotate(-3deg);
    }
    50% { 
      transform: translateX(-50%) rotate(3deg);
    }
  }
}

@media (max-width: 480px) {
  .instructions {
    white-space: normal;
  }
  
  @keyframes swing {
    0%, 100% { 
      transform: translateX(-50%) rotate(-2deg);
    }
    50% { 
      transform: translateX(-50%) rotate(2deg);
    }
  }
}
</style>