import { 
OrbitControls, 
PerspectiveCamera, 
Environment } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { Suspense, useEffect } from "react"
import Scene from "./Scene" 
import Spell from "./Spell" 

function App() {
  const state = useThree()

  useEffect(() => { 
    state.gl.toneMappingExposure = 1;
  }, [state.gl]);

  return (
    <>
      <Environment 
        background={"only"}
        files={"assets/textures/field.hdr"}
        ground={{ height: 100, radius: 300 }}
      />

      <Environment 
        background={false}
        files={"assets/textures/sky.hdr"} 
      />

    <PerspectiveCamera makeDefault fov={30} position={[300, 100, 150]} />
    <OrbitControls target={[0.3, 0.8, 0.4]} maxPolarAngle={Math.PI * 0.5} />    
    <ambientLight intensity={0.4} />
    {/* <pointLight position={[10, 10, 10]} /> */}

    <Suspense fallback={null}> 
      <Scene />
      <Spell /> 
    </Suspense>
 
    </> 
  )
}

export default App
