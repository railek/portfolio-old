import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import useSiteMetadata from '../hooks/useSiteMetadata';

export default function Home() {
  const {
    site: {
      siteMetadata: { title, description, keywords, url, ogImage, favicon, lang },
    },
  } = useSiteMetadata();
  return (
    <>
      <Seo
        title={title}
        description={description}
        keywords={keywords}
        url={url}
        ogImage={ogImage}
        favicon={favicon}
        lang={lang}
        type="website"
        page="Home"
        path=""
      />
      <Layout>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Suscipit tellus mauris a diam maecenas. Duis ultricies
          lacus sed turpis tincidunt id aliquet. Eget est lorem ipsum dolor sit amet consectetur. Et
          malesuada fames ac turpis egestas maecenas. Pulvinar elementum integer enim neque volutpat
          ac. Sit amet porttitor eget dolor morbi non arcu risus. Vitae congue eu consequat ac felis
          donec et odio. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Cursus
          sit amet dictum sit amet justo donec enim diam. Habitasse platea dictumst vestibulum
          rhoncus est. Vel turpis nunc eget lorem dolor sed viverra ipsum. Fringilla phasellus
          faucibus scelerisque eleifend. Elementum integer enim neque volutpat ac tincidunt vitae
          semper. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Euismod
          quis viverra nibh cras pulvinar mattis. Id ornare arcu odio ut sem. A arcu cursus vitae
          congue mauris rhoncus. Pulvinar pellentesque habitant morbi tristique senectus. Nullam
          vehicula ipsum a arcu cursus vitae congue. Nunc pulvinar sapien et ligula ullamcorper
          malesuada. Nisi lacus sed viverra tellus in hac habitasse platea. Consequat ac felis donec
          et odio pellentesque diam volutpat commodo. Tincidunt lobortis feugiat vivamus at augue
          eget arcu. Cras ornare arcu dui vivamus arcu felis. Praesent semper feugiat nibh sed. Nisi
          vitae suscipit tellus mauris a. Gravida quis blandit turpis cursus in hac habitasse platea
          dictumst. Donec adipiscing tristique risus nec feugiat in. Semper auctor neque vitae
          tempus. Pretium nibh ipsum consequat nisl. Sed id semper risus in hendrerit gravida. Nisi
          porta lorem mollis aliquam ut porttitor leo a. Scelerisque viverra mauris in aliquam. Orci
          dapibus ultrices in iaculis nunc sed. In dictum non consectetur a erat nam. Nunc sed
          blandit libero volutpat. Pharetra massa massa ultricies mi quis hendrerit dolor magna
          eget. Mollis nunc sed id semper. Sagittis aliquam malesuada bibendum arcu. Tristique risus
          nec feugiat in fermentum posuere urna nec tincidunt. Duis tristique sollicitudin nibh sit.
          Sagittis eu volutpat odio facilisis mauris sit amet massa. Erat nam at lectus urna duis
          convallis. Suspendisse potenti nullam ac tortor vitae purus. Sed velit dignissim sodales
          ut eu sem integer vitae justo. Risus at ultrices mi tempus imperdiet nulla malesuada.
          Tristique risus nec feugiat in fermentum posuere urna nec. Pulvinar elementum integer enim
          neque volutpat ac tincidunt vitae. Diam vel quam elementum pulvinar etiam non quam lacus.
          Lectus arcu bibendum at varius vel pharetra vel. Ut pharetra sit amet aliquam id diam.
          Pellentesque habitant morbi tristique senectus et netus et malesuada. Ipsum a arcu cursus
          vitae. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Velit
          euismod in pellentesque massa placerat duis ultricies. Urna condimentum mattis
          pellentesque id nibh tortor id aliquet lectus. Ut eu sem integer vitae justo eget magna.
          Nisl nunc mi ipsum faucibus vitae. Quis auctor elit sed vulputate mi sit amet mauris
          commodo. In fermentum et sollicitudin ac orci phasellus. Feugiat nisl pretium fusce id.
          Non sodales neque sodales ut etiam sit amet nisl. Varius quam quisque id diam vel quam
          elementum pulvinar etiam. Et pharetra pharetra massa massa ultricies mi quis hendrerit
          dolor. Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Fermentum
          posuere urna nec tincidunt. Auctor urna nunc id cursus metus. Vitae aliquet nec
          ullamcorper sit amet risus nullam eget felis. Tincidunt lobortis feugiat vivamus at augue
          eget arcu. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Et
          molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Maecenas accumsan lacus vel
          facilisis volutpat est velit egestas dui. Ut enim blandit volutpat maecenas. Pulvinar
          pellentesque habitant morbi tristique senectus et. Nec sagittis aliquam malesuada bibendum
          arcu. Convallis aenean et tortor at risus viverra adipiscing at in. Augue lacus viverra
          vitae congue eu. Ultrices tincidunt arcu non sodales neque sodales ut etiam sit. Eu
          ultrices vitae auctor eu augue ut lectus arcu. Nibh tellus molestie nunc non blandit
          massa. Consequat ac felis donec et odio pellentesque diam volutpat. Orci dapibus ultrices
          in iaculis nunc sed. In nibh mauris cursus mattis molestie a iaculis. Ut etiam sit amet
          nisl purus in mollis nunc. Neque viverra justo nec ultrices. Nibh tellus molestie nunc non
          blandit massa enim nec dui. In massa tempor nec feugiat. Vitae auctor eu augue ut. Urna
          nec tincidunt praesent semper feugiat nibh. At in tellus integer feugiat scelerisque
          varius morbi enim. Amet mattis vulputate enim nulla aliquet. Orci ac auctor augue mauris
          augue neque gravida in fermentum. Arcu ac tortor dignissim convallis aenean et tortor at.
          Amet mattis vulputate enim nulla. Nulla malesuada pellentesque elit eget gravida cum
          sociis. Sed risus pretium quam vulputate dignissim suspendisse in est. Tellus id interdum
          velit laoreet. Nunc faucibus a pellentesque sit amet. Neque convallis a cras semper auctor
          neque vitae tempus. Amet tellus cras adipiscing enim eu turpis. Massa eget egestas purus
          viverra accumsan in nisl. Libero enim sed faucibus turpis in eu mi bibendum. Et tortor
          consequat id porta nibh venenatis cras. Tincidunt nunc pulvinar sapien et ligula
          ullamcorper malesuada. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar
          pellentesque. Tempor id eu nisl nunc mi. Nunc lobortis mattis aliquam faucibus purus in
          massa tempor nec. Eget nunc lobortis mattis aliquam faucibus purus in massa. Nisl nunc mi
          ipsum faucibus vitae. Elit pellentesque habitant morbi tristique. Sed ullamcorper morbi
          tincidunt ornare. Sapien eget mi proin sed libero enim sed. Cursus euismod quis viverra
          nibh cras pulvinar mattis nunc sed. Urna id volutpat lacus laoreet non curabitur gravida.
          Faucibus ornare suspendisse sed nisi. Aliquet risus feugiat in ante. Ridiculus mus mauris
          vitae ultricies leo integer malesuada nunc. Lacinia at quis risus sed vulputate odio ut
          enim. Mi proin sed libero enim sed faucibus turpis in. Tincidunt tortor aliquam nulla
          facilisi cras fermentum odio eu. Nec dui nunc mattis enim ut tellus elementum. In eu mi
          bibendum neque egestas congue. Vulputate odio ut enim blandit volutpat maecenas. Tempor
          orci dapibus ultrices in iaculis. Morbi non arcu risus quis varius quam. Cursus eget nunc
          scelerisque viverra. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Vitae
          turpis massa sed elementum tempus egestas sed. Malesuada fames ac turpis egestas maecenas
          pharetra convallis posuere morbi. Senectus et netus et malesuada. Magna fermentum iaculis
          eu non diam phasellus vestibulum. Consequat interdum varius sit amet mattis vulputate. At
          auctor urna nunc id. Adipiscing vitae proin sagittis nisl. Turpis massa tincidunt dui ut
          ornare lectus. Quis eleifend quam adipiscing vitae proin. Maecenas accumsan lacus vel
          facilisis volutpat est velit egestas dui. Mattis pellentesque id nibh tortor. Nisl nisi
          scelerisque eu ultrices vitae auctor eu augue. Eget mi proin sed libero enim sed faucibus
          turpis in. Molestie at elementum eu facilisis sed odio morbi quis commodo. Etiam sit amet
          nisl purus in mollis nunc sed id. Id neque aliquam vestibulum morbi blandit cursus risus.
          Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas. Neque gravida in
          fermentum et sollicitudin ac. Orci sagittis eu volutpat odio facilisis mauris. Consequat
          semper viverra nam libero justo laoreet sit amet cursus. Euismod elementum nisi quis
          eleifend quam. Eget magna fermentum iaculis eu non diam phasellus vestibulum lorem. Proin
          fermentum leo vel orci porta non pulvinar neque. Consequat interdum varius sit amet mattis
          vulputate enim. Egestas tellus rutrum tellus pellentesque eu tincidunt. Tincidunt dui ut
          ornare lectus sit amet est placerat. Fringilla ut morbi tincidunt augue interdum velit
          euismod in. Libero volutpat sed cras ornare arcu dui vivamus. Imperdiet proin fermentum
          leo vel orci. Amet venenatis urna cursus eget. Varius sit amet mattis vulputate enim nulla
          aliquet porttitor. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor.
          Mauris pharetra et ultrices neque. Libero volutpat sed cras ornare arcu dui vivamus arcu
          felis. Montes nascetur ridiculus mus mauris vitae. Facilisis gravida neque convallis a
          cras semper auctor neque. Dictum varius duis at consectetur lorem donec massa. Vivamus
          arcu felis bibendum ut tristique et. Nunc faucibus a pellentesque sit amet porttitor eget.
          Id nibh tortor id aliquet lectus proin nibh nisl condimentum. Dignissim suspendisse in est
          ante in nibh mauris. Nisl purus in mollis nunc sed id semper. Phasellus faucibus
          scelerisque eleifend donec pretium vulputate sapien. Velit egestas dui id ornare arcu
          odio. Dictum fusce ut placerat orci nulla pellentesque dignissim enim sit. Egestas diam in
          arcu cursus. Et malesuada fames ac turpis egestas integer eget aliquet. Congue mauris
          rhoncus aenean vel elit. Ut porttitor leo a diam sollicitudin tempor id eu nisl. At varius
          vel pharetra vel turpis. Ullamcorper dignissim cras tincidunt lobortis. In dictum non
          consectetur a erat nam at. Proin gravida hendrerit lectus a. Libero justo laoreet sit amet
          cursus sit amet. Eget felis eget nunc lobortis mattis aliquam. Fermentum dui faucibus in
          ornare quam viverra orci. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl.
          Netus et malesuada fames ac turpis. Odio tempor orci dapibus ultrices in. Facilisi morbi
          tempus iaculis urna id. Quam pellentesque nec nam aliquam sem et tortor consequat id.
          Vulputate odio ut enim blandit volutpat. Auctor eu augue ut lectus arcu bibendum at varius
          vel. Interdum velit laoreet id donec ultrices tincidunt arcu. Fermentum leo vel orci porta
          non pulvinar neque laoreet suspendisse. Justo nec ultrices dui sapien eget mi proin sed.
          Aliquam etiam erat velit scelerisque in dictum non. Volutpat blandit aliquam etiam erat
          velit scelerisque in dictum non. Lacus vestibulum sed arcu non odio euismod lacinia at
          quis. Et pharetra pharetra massa massa ultricies. Sollicitudin nibh sit amet commodo.
          Facilisi nullam vehicula ipsum a arcu cursus vitae. Morbi tristique senectus et netus et
          malesuada fames ac. Proin sagittis nisl rhoncus mattis rhoncus urna. Imperdiet massa
          tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Sed arcu non odio euismod
          lacinia. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium
          vulputate. Sit amet justo donec enim diam vulputate. Est velit egestas dui id ornare arcu
          odio. Urna id volutpat lacus laoreet non curabitur gravida arcu. Ut tellus elementum
          sagittis vitae et. Pretium lectus quam id leo in. Pellentesque diam volutpat commodo sed
          egestas egestas fringilla. Vitae justo eget magna fermentum iaculis. Nec nam aliquam sem
          et tortor consequat. Vestibulum lectus mauris ultrices eros in cursus turpis massa. Diam
          volutpat commodo sed egestas egestas fringilla phasellus faucibus. Lectus quam id leo in
          vitae turpis. Convallis tellus id interdum velit laoreet id. Augue mauris augue neque
          gravida in fermentum et sollicitudin. Rutrum quisque non tellus orci ac auctor. Risus
          feugiat in ante metus dictum at tempor. Nec sagittis aliquam malesuada bibendum arcu vitae
          elementum curabitur vitae. Nisl tincidunt eget nullam non nisi. Cras tincidunt lobortis
          feugiat vivamus. Porttitor massa id neque aliquam vestibulum morbi blandit cursus. Arcu
          dui vivamus arcu felis. Blandit cursus risus at ultrices mi tempus imperdiet. Bibendum
          enim facilisis gravida neque convallis. Purus gravida quis blandit turpis cursus in. Quam
          nulla porttitor massa id. At lectus urna duis convallis convallis tellus id interdum. Nisi
          scelerisque eu ultrices vitae auctor eu augue. Quis imperdiet massa tincidunt nunc
          pulvinar sapien et. Sit amet venenatis urna cursus eget. Ut tortor pretium viverra
          suspendisse potenti nullam ac tortor vitae. Sollicitudin aliquam ultrices sagittis orci a
          scelerisque purus. At quis risus sed vulputate odio ut enim blandit volutpat. Nec
          tincidunt praesent semper feugiat nibh. Vitae congue eu consequat ac felis donec et odio
          pellentesque. Libero nunc consequat interdum varius sit amet mattis vulputate enim. Leo
          integer malesuada nunc vel risus commodo viverra. Neque viverra justo nec ultrices dui
          sapien eget mi.
        </p>
      </Layout>
    </>
  );
}
