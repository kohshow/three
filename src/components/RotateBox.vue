<template>
  <canvas id="canvas" width="600" height="400"></canvas>
</template>

<script>
import * as THREE from "three";

export default {
  name: "RotateBox",
  props: {
    speed: {
        required: false,
        type: Number,
        default: 0.02
    }
  },
  data() {
    const scene = new THREE.Scene();
    const renderer = null;
    const camera = new THREE.PerspectiveCamera(75, 600 / 400, 0.1, 1000);
    const light = new THREE.DirectionalLight(0xffffff);
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshNormalMaterial();
    const cube = new THREE.Mesh(geometry, material);
    return { scene, renderer, camera, light, geometry, material, cube };
  },
  mounted() {
    const $canvas = document.getElementById("canvas");
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      canvas: $canvas
    });

    this.camera.position.set(0, 0, 2);
    this.light.position.set(0, 0, 10);
    this.scene.add(this.cube);
    this.scene.add(this.light);

    this.animate();
  },
  methods: {
    animate() {
      requestAnimationFrame(this.animate);

      this.cube.rotation.x += this.speed;
      this.cube.rotation.y += this.speed;

      this.renderer.render(this.scene, this.camera);
    }
  }
};
</script>

<style></style>
