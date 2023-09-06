import { MeshTransmissionMaterial, Sphere, useTexture, useGLTF
} from "@react-three/drei";
import { NodeToyMaterial } from "@nodetoy/react-nodetoy";
import { data as SphereShaderData} from "./sphere-shader.js";
 
export default function Meteor() {  

const [ normalMap ] = useTexture(["assets/textures/normals.png"]);

return (
    <> 
       <Sphere position={[20, 55, -10]} scale={[6, 6, 6]}>
        <MeshTransmissionMaterial 
          normalMap={normalMap}
          normalScale={[0.3, 0.3]}
          roughness={0}
          ior={1.5}
          thickness={0.035}
          transmission={1}
          chromaticAberration={1}
          anisotropy={20}
          distortion={0}
          distortionScale={0}
          samples={10}
          backside={true}
          color={"#fff"}
          attenuationDistance={0.2}
          attenuationColor={"#e2ae5b"}
        /> 
            <NodeToyMaterial data={SphereShaderData} /> 
      </Sphere>
    </>
);
}
