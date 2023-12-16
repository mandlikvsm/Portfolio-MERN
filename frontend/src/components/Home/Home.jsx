import React, { useEffect } from 'react'
import './Home.css'
import * as THREE from "three";
// import {OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import moonImage from '../Images/moon.jpg';
import spaceImage from '../Images/space.jpg';
import { Typography } from '@mui/material';
// import { Timeline } from '@mui/icons-material';
import TimeLine from '../TimeLine/TimeLine';
// import venusImage from '../Images/venus.jpg';
import {
  SiCplusplus,
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiThreedotjs,
} from 'react-icons/si';
import YoutubeCard from '../YoutubeCard/YoutubeCard';

const Home = ({ timelines, youtubes, skills }) => {

  useEffect(() => {

    const textureLoader = new THREE.TextureLoader();

    // const moonTexture = textureLoader.load(moonImage);
    // const venusTexture = textureLoader.load(venusImage);
    const spaceTexture = textureLoader.load(spaceImage);


    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const canvas = document.querySelector(".homeCanvas");
    const renderer = new THREE.WebGLRenderer({ canvas });

    // const moonGeometry = new THREE.SphereGeometry(2, 64, 64);
    //  const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
    //  const moon = new THREE.Mesh(moonGeometry, moonMaterial);

    //  const venusGeometry = new THREE.SphereGeometry(3, 64, 64);
    //  const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
    //  const venus = new THREE.Mesh(venusGeometry, venusMaterial);


    // const pointLight = new THREE.PointLight(0xffffff, 1);
    // const pointLight2 = new THREE.PointLight(0xffffff, 0.1);

    // pointLight.position.set(8, 5, 5);
    // pointLight2.position.set(-8,-5,-5);



    // const controls = new OrbitControls(camera, renderer.domElement);
    // scene.add(moon);
    // scene.add(venus);
    // scene.add(pointLight);
    // scene.add(pointLight2);

    // window.addEventListener("mousemove",(e) => );

    // venus.position.set(8, 5, 5);
    scene.background = spaceTexture;

    camera.position.set(4, 4, 8);

    const animation = () => {
      requestAnimationFrame(animation);
      // moon.rotation.y += 0.01;
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    };

    animation();



  }, [])

  return (
    <div className='home'>
      <canvas className='homeCanvas'></canvas>

      <div className="homeContainer">
        <Typography variant="h3">TimeLine</Typography>
        <TimeLine timelines={timelines} />
      </div>

      <div className="homeSkills">
        <Typography variant="h3">SKILLs </Typography>
        <div className="homeCubeSkills">

          <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
            <img src={skills.image1.url} alt="FACE1" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
            <img src={skills.image2.url} alt="FACE2" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
            <img src={skills.image3.url} alt="FACE3" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
            <img src={skills.image4.url} alt="FACE4" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
            <img src={skills.image5.url} alt="FACE5" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
            <img src={skills.image6.url} alt="FACE6" />
          </div>
        </div>

        <div className="cubeShadow">


        </div>
        <div className="homeskillsBox">
          <SiCplusplus />
          <SiReact />
          <SiJavascript />
          <SiMongodb />
          <SiNodedotjs />
          <SiExpress />
          <SiCss3 />
          <SiHtml5 />
          <SiThreedotjs />

        </div>
      </div>

      <div className="homeYoutube">
        <Typography variant="h3"> YOUTUBE VIDEOS</Typography>

        <div className="homeYoutubeWrapper">


          {youtubes &&
            youtubes.map(item => (

              <YoutubeCard
                key={item._id}
                image={item.image.url}
                title={item.title}
                url={item.url}
                id={item._id}
              />
            ))
          }



        </div>

      </div>
    </div>
  )
}

export default Home
