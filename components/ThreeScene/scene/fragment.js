/**
 * Der Fragment-Shader ist ein spezieller Shader, der in WebGL und Three.js verwendet wird,
 * um die Farbe und andere Aspekte jedes Fragments (Pixels) auf dem Bildschirm zu berechnen.
 * Dieser spezielle Shader ist in GLSL (OpenGL Shading Language) geschrieben.
 */

export const fragment = ` 
// Definiert die Präzision der Fließkommaoperationen
precision mediump float;

// Eine variierte Variable, die die Texturkoordinaten von jedem Vertex enthält
varying vec2 vUv;

// Uniform-Variable für die Zeit seit Beginn der Ausführung
uniform float u_time;

// Uniform-Variable für die Auflösung des Viewports
uniform vec2 u_resolution;

// Uniform-Variable für den Blitz-Effekt
uniform float u_flash;

// Uniform-Variable für die Textur, die auf die Geometrie angewendet werden soll
uniform sampler2D u_texture;

// Hauptfunktion, die für jedes Fragment aufgerufen wird
void main(){

  // Berechnet die normalisierten Koordinaten des aktuellen Fragments
  vec2 q = gl_FragCoord.xy / u_resolution.xy;
  
  // Berechnet die modifizierten UV-Koordinaten
  vec2 uv = 0.5 + (q - 0.5) * (0.9 + 0.1 * sin(0.2 * u_time / 5.0));
  
  // Initialisiert die Farbvariable
  vec3 col;

  // Definiert eine neue Auflösung für den UV-Raum
  vec2 newRes = vec2(512.0);

  // Initialisiert eine Palette für die Farbmanipulation
  vec3 pal = vec3(6.0,6.0,6.0);

  // Überprüft, ob der Blitz-Effekt aktiviert ist
  if (u_flash > 0.0){
    // Aktualisiert die UV-Koordinaten für den Blitz-Effekt
    uv = floor(uv * newRes) / newRes;
    
    // Holt die Farbe von der Textur an den neuen UV-Koordinaten
    col = texture2D(u_texture, uv).xyz;
  }
  else {
    // Holt die Farbkanäle separat von der Textur und verschiebt die UV-Koordinaten leicht
    col.r = texture2D(u_texture, vec2(uv.x + 0.003, uv.y)).x;
    col.g = texture2D(u_texture, vec2(uv.x + 0.00, uv.y)).y;
    col.b = texture2D(u_texture, vec2(uv.x - 0.003, uv.y)).z;
  }

  // Wendet einen Farbeffekt an
  col = clamp(col * 0.5 + 0.5 * col * col * 1.2, 0.0, 1.0);

  // Definiert eine Helligkeitsvariable
  float brightness = 0.5;
  
  // Modifiziert die Farbe basierend auf den UV-Koordinaten
  col *= brightness + 0.5 * 16.0 * uv.x * uv.y * (1.0 - uv.x) * (uv.y);
  
  // Berechnet eine Stufenfunktion auf Basis der Zeit
  float s = step(sin(u_time / 8.0), 0.0);

  // Berechnet eine alternative Variable für den Scanline-Effekt
  float alt = 10.0 * u_time + uv.y * s * 100.0;

  // Ändert die Scanlinien ein wenig
  if (s <= 0.5){
    alt = 10.0 * u_time + uv.y * 800.0;
  }

  // Wendet einen Sinus-Effekt auf die Farbe an
  col *= 0.9 + 0.1 * sin(alt);    
  col *= 0.99 + 0.01 * sin(110.0 * u_time);

  // Verstärkt den Rotkanal
  col.r *= 1.1;
  
  // Macht die Dinge ein wenig blauer
  col.b = col.b * 1.05;

  // Verschiebt die Farben ein wenig
  if (u_flash > 0.0){
    col.g = col.g * sin(u_flash * 50000.0) - cos(u_time);
    col.xyz = floor(col.xyz * pal) / pal.xyz;
    gl_FragColor = vec4(col - 0.5, 1.0);
  }
  else {
    gl_FragColor = vec4(col - 0.05, 1.0);
  }
  
}`
