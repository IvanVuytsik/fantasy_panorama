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
            // clearcoat={1}
            // resolution={true}
            // temporalDistortion={0.5}
            // bg={false}
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
            color={"#ec0404"}
            attenuationDistance={0.2}
            attenuationColor={"#f49600"}
        /> 
        <NodeToyMaterial data={SphereShaderData} /> 
      </Sphere>
 

</>
);
}