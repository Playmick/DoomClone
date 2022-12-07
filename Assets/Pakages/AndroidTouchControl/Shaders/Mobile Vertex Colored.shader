Shader "Mobile/Vertex Colored" {
Properties {
    _Color ("Main Color", Color) = (1,1,1,0.5)
	_MainTex ("Base (RGB)", 2D) = "grass" {}
	_LightPower ("Light Power", Float) = 0.0
    _SpecColor ("Spec Color", Color) = (1,1,1,1)
    _Emission ("Emmisive Color", Color) = (0,0,0,0)
    _Shininess ("Shininess", Range (0.01, 1)) = 0.1
    
}
 
SubShader {
    Pass {
        Material {
            Diffuse [_Color]
            Shininess [_Shininess]
            Specular [_SpecColor]
            Emission [_Emission]    
        }
        ColorMaterial AmbientAndDiffuse
        Lighting Off
        Fog { Mode Off }
        SetTexture [_MainTex] {
            Combine texture * primary, texture * primary
        }
        SetTexture [_MainTex] {
            constantColor [_Color]
            Combine previous * constant DOUBLE, previous * constant
        } 
    }
}
 
Fallback " VertexLit", 1
}