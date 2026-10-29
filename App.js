import React, { useRef, useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';  
import { createDrawerNavigator } from '@react-navigation/drawer'; 
import { createStackNavigator } from '@react-navigation/stack'; 
import { View, Text, StyleSheet, Image, Animated, ScrollView, TouchableOpacity, Linking } from 'react-native';

// Este es un cambio en la rama dev
function Inicio() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Inicio */ }
      <Text style={styles.TextoGeneral}></Text>
      <Image
          source={require('./assets/bluearchive.png')}
          style={styles.Logo}
      />
      <Text style={styles.TextoGeneral}>BANNER ACTUAL</Text>
      <Text style={styles.TextoImagen}>Ryuuge Kisaki (竜華キサキ)</Text>
      <Image
        source={require('./assets/kisakibanner.png')}
        style={styles.image1}
      />
      <Text style={styles.TextoImagen}>Kayama Reijo (鹿山レイジョ)</Text>
      <Image
        source={require('./assets/reijo.png')}
        style={styles.image1}
      />
      <Text style={styles.TextoGeneral}></Text>
      <Text style={styles.TextoGeneral}>JEFE ACTUAL</Text>
      <Text style={styles.TextoImagen}>KAITEN FX Mk.0</Text>
      <Image
        source={require('./assets/kaitenger.png')}
        style={styles.image1}
      />
      <Text style={styles.TextoGeneral}></Text>
      <Text style={styles.TextoGeneral}>CUMPLEAÑOS ACTUAL</Text>
      <Image
        source={require('./assets/juntadita.png')}
        style={styles.image2}
      />
      <Text style={styles.TextoImagen}>Tendou Arisu (天童アリス)</Text>
      <Text style={styles.TextoImagen}></Text>
      <Text style={styles.TextoImagen}></Text>
    </ScrollView>
  );
}

function Personajes() {
  const [visibleHina, setVisibleHina] = useState(false);
  const [visibleKisaki, setVisibleKisaki] = useState(false);
  const [visibleWakamo, setVisibleWakamo] = useState(false);
  const [visibleKayoko, setVisibleKayoko] = useState(false);
  const [visibleShiroko, setVisibleShiroko] = useState(false);
  const [visibleShun, setVisibleShun] = useState(false);
  const [visibleMakoto, setVisibleMakoto] = useState(false);

  const fadeAnimHina = useRef(new Animated.Value(0)).current;
  const fadeAnimKisaki = useRef(new Animated.Value(0)).current;
  const fadeAnimWakamo = useRef(new Animated.Value(0)).current;
  const fadeAnimKayoko = useRef(new Animated.Value(0)).current;
  const fadeAnimShiroko = useRef(new Animated.Value(0)).current;
  const fadeAnimShun = useRef(new Animated.Value(0)).current;
  const fadeAnimMakoto = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnimHina, {
      toValue: visibleHina ? 1 : 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [visibleHina]);

  useEffect(() => {
    Animated.timing(fadeAnimKisaki, {
      toValue: visibleKisaki ? 1 : 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [visibleKisaki]);

  useEffect(() => {
    Animated.timing(fadeAnimWakamo, {
      toValue: visibleWakamo ? 1 : 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [visibleWakamo]);

  useEffect(() => {
    Animated.timing(fadeAnimKayoko, {
      toValue: visibleKayoko ? 1 : 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [visibleKayoko]);

  useEffect(() => {
    Animated.timing(fadeAnimShiroko, {
      toValue: visibleShiroko ? 1 : 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [visibleShiroko]);

  useEffect(() => {
    Animated.timing(fadeAnimShun, {
      toValue: visibleShun ? 1 : 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [visibleShun]);

  useEffect(() => {
    Animated.timing(fadeAnimMakoto, {
      toValue: visibleMakoto ? 1 : 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [visibleMakoto]);

  const toggleVisibilityHina = () => setVisibleHina((prev) => !prev);
  const toggleVisibilityKisaki = () => setVisibleKisaki((prev) => !prev);
  const toggleVisibilityWakamo = () => setVisibleWakamo((prev) => !prev);
  const toggleVisibilityKayoko = () => setVisibleKayoko((prev) => !prev);
  const toggleVisibilityShiroko = () => setVisibleShiroko((prev) => !prev);
  const toggleVisibilityShun = () => setVisibleShun((prev) => !prev);
  const toggleVisibilityMakoto = () => setVisibleMakoto((prev) => !prev);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Imagen de Hina */}
      <Text style={styles.instruccion}>Pulsa en la personaje para ver su informacion</Text>
      <Text style={styles.TextoGeneral}></Text>
      <Text style={styles.TextoGeneral}>Sorasaki Hina (空崎ヒナ)</Text>
      <TouchableOpacity onPress={toggleVisibilityHina}>
        <Image source={require("./assets/hina.webp")} style={styles.imagenprincipal} />
      </TouchableOpacity>

      {visibleHina && (
        <>
          <Animated.View style={{ opacity: fadeAnimHina }}>
            <Image source={require("./assets/notitahina.png")} style={styles.notita} />
          </Animated.View>
          <Animated.View style={{ opacity: fadeAnimHina }}>
            <Text style={styles.TextoGeneral}>Versiones alternativas</Text>
          </Animated.View>
          <Animated.View style={{ opacity: fadeAnimHina }}>
            <Image source={require("./assets/shina.webp")} style={styles.imagenanimada1} />
          </Animated.View>
          <Animated.View style={{ opacity: fadeAnimHina }}>
            <Image source={require("./assets/dhina.webp")} style={styles.imagenanimada2} />
          </Animated.View>
        </>
      )}
      <Text style={styles.TextoGeneral}></Text>
      <Text style={styles.TextoGeneral}></Text>

      {/* Imagen de Kisaki */}
      <Text style={styles.TextoGeneral}>Ryuuge Kisaki (竜華キサキ)</Text>
      <TouchableOpacity onPress={toggleVisibilityKisaki}>
        <Image source={require("./assets/kisaki.webp")} style={styles.imagenprincipal2} />
      </TouchableOpacity>

      {visibleKisaki && (
        <Animated.View style={{ opacity: fadeAnimKisaki }}>
          <Image source={require("./assets/notitakisaki.png")} style={styles.notita2} />
        </Animated.View>
      )}
      <Text style={styles.TextoGeneral}></Text>
      <Text style={styles.TextoGeneral}></Text>

      {/* Imagen de Wakamo */}
      <Text style={styles.TextoGeneral}>Kosaka Wakamo (狐坂ワカモ)</Text>
      <TouchableOpacity onPress={toggleVisibilityWakamo}>
        <Image source={require("./assets/wakamo.webp")} style={styles.imagenprincipal3} />
      </TouchableOpacity>

      {visibleWakamo && (
        <>
          <Animated.View style={{ opacity: fadeAnimWakamo }}>
            <Image source={require("./assets/notitawakamo.png")} style={styles.notita} />
          </Animated.View>
          <Animated.View style={{ opacity: fadeAnimWakamo }}>
            <Text style={styles.TextoGeneral}>Versiones alternativas</Text>
          </Animated.View>
          <Animated.View style={{ opacity: fadeAnimWakamo }}>
            <Image source={require("./assets/swakamo.webp")} style={styles.imagenanimada3} />
          </Animated.View>
        </>
      )}
      <Text style={styles.TextoGeneral}></Text>
      <Text style={styles.TextoGeneral}></Text>

      {/* Imagen de Kayoko */}
      <Text style={styles.TextoGeneral}>Onikata Kayoko (鬼方カヨコ)</Text>
      <TouchableOpacity onPress={toggleVisibilityKayoko}>
        <Image source={require("./assets/kayoko.webp")} style={styles.imagenprincipal4} />
      </TouchableOpacity>

      {visibleKayoko && (
        <>
          <Animated.View style={{ opacity: fadeAnimKayoko }}>
            <Image source={require("./assets/notitakayoko.png")} style={styles.notita} />
          </Animated.View>
          <Animated.View style={{ opacity: fadeAnimKayoko }}>
            <Text style={styles.TextoGeneral}>Versiones alternativas</Text>
          </Animated.View>
          <Animated.View style={{ opacity: fadeAnimKayoko }}>
            <Image source={require("./assets/nykayoko.webp")} style={styles.imagenanimada4} />
          </Animated.View>
          <Animated.View style={{ opacity: fadeAnimKayoko }}>
            <Image source={require("./assets/dkayoko.webp")} style={styles.imagenanimada5} />
          </Animated.View>
        </>
      )}
      <Text style={styles.TextoGeneral}></Text>
      <Text style={styles.TextoGeneral}></Text>

      {/* Imagen de Shiroko */}
      <Text style={styles.TextoGeneral}>Sunaookami Shiroko (砂狼シロコ).</Text>
      <TouchableOpacity onPress={toggleVisibilityShiroko}>
        <Image source={require("./assets/tshiroko.webp")} style={styles.imagenprincipal5} />
      </TouchableOpacity>

      {visibleShiroko && (
        <>
          <Animated.View style={{ opacity: fadeAnimShiroko }}>
            <Image source={require("./assets/notitashiroko.png")} style={styles.notita} />
          </Animated.View>
          <Animated.View style={{ opacity: fadeAnimShiroko }}>
            <Text style={styles.TextoGeneral}>Versiones alternativas</Text>
          </Animated.View>
          <Animated.View style={{ opacity: fadeAnimShiroko }}>
            <Image source={require("./assets/shiroko.webp")} style={styles.imagenanimada6} />
          </Animated.View>
          <Animated.View style={{ opacity: fadeAnimShiroko }}>
            <Image source={require("./assets/cshiroko.webp")} style={styles.imagenanimada2} />
          </Animated.View>
          <Animated.View style={{ opacity: fadeAnimShiroko }}>
            <Image source={require("./assets/sshiroko.webp")} style={styles.imagenanimada5} />
          </Animated.View>
        </>
      )}
      <Text style={styles.TextoGeneral}></Text>
      <Text style={styles.TextoGeneral}></Text>

      {/* Imagen de Shun */}
      <Text style={styles.TextoGeneral}>Sunohara Shun (春原シュン)</Text>
      <TouchableOpacity onPress={toggleVisibilityShun}>
        <Image source={require("./assets/shun.webp")} style={styles.imagenprincipal6} />
      </TouchableOpacity>

      {visibleShun && (
        <>
          <Animated.View style={{ opacity: fadeAnimShun }}>
            <Image source={require("./assets/notitashun.png")} style={styles.notita} />
          </Animated.View>
          <Animated.View style={{ opacity: fadeAnimShun }}>
            <Text style={styles.TextoGeneral}>Versiones alternativas</Text>
          </Animated.View>
          <Animated.View style={{ opacity: fadeAnimShun }}>
            <Image source={require("./assets/sshun.webp")} style={styles.imagenanimada7} />
          </Animated.View>
        </>
      )}
      <Text style={styles.TextoGeneral}></Text>
      <Text style={styles.TextoGeneral}></Text>

      {/* Imagen de Makoto */}
      <Text style={styles.TextoGeneral}>Hanuma Makoto (羽沼マコト)</Text>
      <TouchableOpacity onPress={toggleVisibilityMakoto}>
        <Image source={require("./assets/makoto.webp")} style={styles.imagenprincipal3} />
      </TouchableOpacity>

      {visibleMakoto && (
        <Animated.View style={{ opacity: fadeAnimMakoto }}>
          <Image source={require("./assets/notitamakoto.png")} style={styles.notita} />
        </Animated.View>
      )}
      <Text style={styles.TextoGeneral}></Text>
      <Text style={styles.TextoGeneral}></Text>
    </ScrollView>
  );
}

function Historia() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>Volumenes</Text>
      <Text style={styles.instruccion}>Pulsa en los iconos para ver su informacion</Text>
      <View style={styles.contactoInfo}>
        <TouchableOpacity onPress={() => Linking.openURL('https://bluearchive.fandom.com/wiki/Story/Main_Story#Prologue')}>
          <Text style={styles.Puntos}>• Prologo</Text>
          <Image
              source={require('./assets/prologo.png')}
              style={styles.volumen1}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://bluearchive.fandom.com/wiki/Story/Main_Story#Volume_1:_The_Foreclosure_Task_Force')}>
          <Text style={styles.Puntos}>• Volumen 1: The Foreclosure Task Force</Text>
          <Image
              source={require('./assets/volumen1.png')}
              style={styles.volumen2}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://bluearchive.fandom.com/wiki/Story/Main_Story#Volume_2:_Clockwork_Flower_Pavane')}>
          <Text style={styles.Puntos}>• Volumen 2: Clockwork Flower Pavane</Text>
          <Image
              source={require('./assets/volumen2.png')}
              style={styles.volumen3}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://bluearchive.fandom.com/wiki/Story/Main_Story#Volume_3:_Treaty_of_Eden')}>
          <Text style={styles.Puntos}>• Volumen 3: Treaty of Eden</Text>
          <Image
              source={require('./assets/volumen3.png')}
              style={styles.volumen4}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://bluearchive.fandom.com/wiki/Story/Main_Story#Volume_4:_The_Rabbit_of_Caerbannog')}>
          <Text style={styles.Puntos}>• Volumen 4: The Rabbit of Caerbannog</Text>
          <Image
              source={require('./assets/volumen4.png')}
              style={styles.volumen5}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://bluearchive.fandom.com/wiki/Story/Main_Story#Volume_Final:_Where_All_Miracles_Begin')}>
          <Text style={styles.Puntos}>• Volumen Final: Where all Miracles Begin</Text>
          <Image
              source={require('./assets/Final.png')}
              style={styles.volumen6}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://bluearchive.fandom.com/wiki/Story/Main_Story#Volume_5:_Hyakka_Ryōran')}>
          <Text style={styles.Puntos}>• Volumen 5: Hyakka Ryōran</Text>
          <Image
              source={require('./assets/volumen5.png')}
              style={styles.volumen7}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://bluearchive.fandom.com/wiki/Story/Main_Story#Volume_EX:_Decagrammaton')}>
          <Text style={styles.Puntos}>• Volumen EX: Decagramaton</Text>
          <Image
              source={require('./assets/EX.png')}
              style={styles.volumen8}
          />
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

function Contacto() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.TextoGeneral}></Text>
      <View style={styles.contactoInfo}>
        <Text style={styles.subTitulo}>Donde jugar:</Text>
          <Image
          source={require('./assets/android.png')}
          style={styles.plataforma}
          />
          <Image
          source={require('./assets/ios.png')}
          style={styles.plataforma}
          />

        <Text style={styles.subTitulo}>Redes Sociales:</Text>
        <View style={styles.socialLinks}>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/EN.BlueArchive/')}>
            <Text style={styles.socialLink}>Facebook</Text>
            <Image
              source={require('./assets/facebook.png')}
              style={styles.facebook}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://x.com/EN_BlueArchive')}>
            <Text style={styles.socialLink}>Twitter/X</Text>
            <Image
              source={require('./assets/twitter.png')}
              style={styles.redsocial}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.youtube.com/channel/UCsrnDYrkovQhCCE8kwKcvKQ')}>
            <Text style={styles.socialLink}>Youtube</Text>
            <Image
              source={require('./assets/youtube.png')}
              style={styles.redsocial}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('discord.gg/bluearchiveglobal')}>
            <Text style={styles.socialLink}>Discord</Text>
            <Image
              source={require('./assets/discord.png')}
              style={styles.redsocial}
            />
          </TouchableOpacity>
        </View>
      </View>

    </ScrollView>
  );
}

// Crear el Stack Navigator para navegar en pilas
const Stack = createStackNavigator();
// Crear el Drawer (menú lateral)
const Drawer = createDrawerNavigator();

// Crear el menú lateral 
function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Inicio" component={Inicio} />
      <Drawer.Screen name="Personajes" component={Personajes} />
      <Drawer.Screen name="Historia" component={Historia} />
      <Drawer.Screen name="Contacto" component={Contacto} />
    </Drawer.Navigator>
  );
}

// Componente principal de la app
export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#B9E2F8',  // Fondo azul en todas las pantallas
    padding: .5,
    alignItems: 'center',      // Centra el contenido horizontalmente
  },

  text: {
    fontFamily: 'Futura Bold',
    color: '#333333',  // color del texto 
    fontSize: 40,    // Tamaño del texto
    marginHorizontal: 10,
    marginTop: 10,
  },

  // Estilo del Menu de Inicio
  Logo: {
    width: 400,
    height: 110,
    marginBottom: 20,
  },

  image1: {
    width: 200,
    height: 100,
    marginBottom: 20,
  },
  
  General: {
    fontFamily: 'Futura Bold',
    backgroundColor: 'white',
    width: '90%',
    marginVertical: 10,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  TextoGeneral: {
    fontFamily: 'Futura Bold',
    color: '#333333',
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  image2: {
    width: 250,
    height: 100,
    alignItems: 'center',
  },

  // Estilos del menu de historia
  Puntos: {
    fontFamily: 'Impact',
    color: '#5AAFD6',
    fontSize: 16,
    textAlign: 'jutstified',
    marginVertical: 5,
    textDecorationLine: "underline",
  },

  volumen1: {
    width: 325,
    height: 125,
    marginBottom: 20,
  },

  volumen2: {
    width: 340,
    height: 125,
    marginBottom: 20,
  },

  volumen3: {
    width: 340,
    height: 125,
    marginBottom: 20,
  },

  volumen4: {
    width: 385,
    height: 125,
    marginBottom: 20,
  },

  volumen5: {
    width: 325,
    height: 125,
    marginBottom: 20,
  },

  volumen6: {
    width: 325,
    height: 125,
    marginBottom: 20,
  },

  volumen7: {
    width: 350,
    height: 125,
    marginBottom: 20,
  },

  volumen8: {
    width: 310,
    height: 125,
    marginBottom: 20,
  },

  // Estilo del menu de personajes
  imagenprincipal: {
    width: 700,
    height: 450,
    alignItems: 'center',
  },

  imagenprincipal2: {
    width: 225,
    height: 500,
    alignItems: 'center',
  },

  imagenprincipal3: {
    width: 380,
    height: 500,
    alignItems: 'center',
  },

  imagenprincipal4: {
    width: 200,
    height: 509,
    alignItems: 'center',
  },

  imagenprincipal5: {
    width: 380,
    height: 510,
    alignItems: 'center',
  },

  imagenprincipal6: {
    width: 265,
    height: 550,
    alignItems: 'center',
  },

  imagenanimada1: {
    width: 200,
    height: 320,
    alignItems: 'center',
  },

  imagenanimada2: {
    width: 225,
    height: 300,
    alignItems: 'center',
  },

  imagenanimada3: {
    width: 260,
    height: 320,
    alignItems: 'center',
  },

  imagenanimada4: {
    width: 80,
    height: 350,
    alignItems: 'center',
  },

  imagenanimada5: {
    width: 110,
    height: 310,
    alignItems: 'center',
  },

  imagenanimada6: {
    width: 155,
    height: 310,
    alignItems: 'center',
  },

  imagenanimada7: {
    width: 200,
    height: 300,
    alignItems: 'center',
  },

  notita: {
    width: 400,
    height: 200,
    alignItems: 'center',
  },

  notita2: {
    width: 400,
    height: 220,
    alignItems: 'center',
  },

  // Estilo del Contacto
  contactoInfo: {
    marginTop: 30,
    width: '90%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },

  socialLinks: {
    fontFamily: 'Roboto',
    marginTop: 10,
  },

  socialLink: {
    color: '#5AAFD6',
    fontFamily: 'Roboto',
    fontSize: 16,
    marginBottom: 10,
  },

  facebook: {
    width: 32,
    height: 32,
    marginBottom: 20,
    marginLeft: 20,
  },

  redsocial: {
    width: 37.5,
    height: 32,
    marginBottom: 20,
    marginLeft: 20,
  },
  
  plataforma: {
    width: 95,
    height: 50,
    marginBottom: 20,
  },

  instruccion: {
    fontFamily: 'Futura Bold',
    color: '#333333',  // color del texto 
    fontSize: 20,    // Tamaño del texto
    marginHorizontal: 10,
    marginTop: 10,
  },

});
