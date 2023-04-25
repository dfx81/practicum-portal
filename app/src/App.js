import "./css/style.css";

import Sidebar from "./components/Sidebar";
import Ticker from "./components/Ticker";

function App() {
  return (
    <div className="container">
      <Sidebar isMobile={true} />
      <Sidebar isMobile={false} />
      <div className="content">
        <main className="main">
          <section>
            <h1 className="page-title">Contact Info.</h1>
            <section>
              <h2>Practicum Unit</h2>
              <p><b>Email: </b><a id="email" href="#">#</a></p>
              <p><b>Address: </b><span id="address">#</span></p>
              <p><b>Office Location: </b><span id="office">#</span></p>
            </section>
            <section>
              <h2>College of Arts and Science (CAS)</h2>
              <p><b>Contact No.: </b><a id="cas" href="#">#</a></p>
            </section>
            <section>
              <h2>College of Law, Government, and International Studies (COLGIS)</h2>
              <p><b>Contact No.: </b><a id="colgis" href="#">#</a></p>
            </section>
            <section>
              <h2>College of Business (COB)</h2>
              <p><b>Contact No.: </b><a id="cob" href="#">#</a></p>
            </section>
          </section>
          {/*<section>
          <iframe width="720" height="480" src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
            </section>*/}
          <section>
            <h2>Subheader</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore
              et
              dolore magna aliqua. Et ultrices neque ornare aenean. Orci porta non pulvinar neque laoreet
              suspendisse
              interdum consectetur libero. Nec sagittis aliquam malesuada bibendum arcu vitae elementum
              curabitur.
              Justo laoreet sit amet cursus sit amet dictum sit amet. Blandit massa enim nec dui nunc
              mattis enim
              ut
              tellus. Bibendum neque egestas congue quisque egestas diam in arcu. Ornare massa eget
              egestas purus
              viverra accumsan in. Id aliquet lectus proin nibh nisl condimentum id. In metus vulputate eu
              scelerisque
              felis imperdiet. Elit at imperdiet dui accumsan sit amet nulla facilisi. Proin nibh nisl
              condimentum
              id
              venenatis. Amet nisl purus in mollis nunc sed id semper risus. Molestie nunc non blandit
              massa.
              Elementum sagittis vitae et leo duis ut.</p>
            <img src="assets/bliss.jpg" />
            <p>Neque viverra justo nec ultrices dui sapien eget. At auctor urna nunc id cursus metus aliquam
              eleifend
              mi. Sit amet volutpat consequat mauris nunc congue. Ante in nibh mauris cursus mattis. Dui
              ut ornare
              lectus sit amet est placerat in. Porttitor eget dolor morbi non arcu risus quis varius quam.
              Vestibulum
              morbi blandit cursus risus at ultrices mi. Potenti nullam ac tortor vitae purus faucibus
              ornare
              suspendisse sed. Quam quisque id diam vel quam elementum pulvinar etiam. Semper viverra nam
              libero
              justo
              laoreet sit amet. Dui vivamus arcu felis bibendum ut. Aliquam faucibus purus in massa
              tempor. Diam
              vel
              quam elementum pulvinar etiam non quam lacus suspendisse. Malesuada proin libero nunc
              consequat.
              Mattis
              pellentesque id nibh tortor id. Aliquet nibh praesent tristique magna sit amet purus
              gravida.
              Senectus
              et netus et malesuada fames. Semper quis lectus nulla at volutpat diam ut venenatis tellus.
              Lectus
              magna
              fringilla urna porttitor rhoncus dolor purus non enim. Purus in massa tempor nec.</p>
          </section>
          <section>
            <p>Sit amet commodo nulla facilisi nullam vehicula. Non sodales neque sodales ut etiam sit amet
              nisl
              purus.
              Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula. Nulla at volutpat diam ut
              venenatis.
              Sapien eget mi proin sed libero. Enim sit amet venenatis urna cursus. Etiam tempor orci eu
              lobortis
              elementum. Eget est lorem ipsum dolor sit amet consectetur. Tellus at urna condimentum
              mattis.
              Pellentesque elit ullamcorper dignissim cras. Odio euismod lacinia at quis risus sed
              vulputate.
              Sapien
              faucibus et molestie ac feugiat sed. Ullamcorper sit amet risus nullam eget felis eget nunc
              lobortis.
              Nunc aliquet bibendum enim facilisis gravida neque convallis a. Iaculis urna id volutpat
              lacus
              laoreet
              non curabitur gravida arcu. Ullamcorper sit amet risus nullam. Nec sagittis aliquam
              malesuada
              bibendum
              arcu vitae elementum. Proin fermentum leo vel orci porta non pulvinar neque laoreet.
              Scelerisque
              fermentum dui faucibus in.</p>
            <p>Parturient montes nascetur ridiculus mus. Faucibus nisl tincidunt eget nullam non. Turpis
              tincidunt
              id
              aliquet risus feugiat in ante. Pellentesque nec nam aliquam sem et tortor consequat id. Id
              leo in
              vitae
              turpis massa sed. At consectetur lorem donec massa sapien faucibus et molestie ac. At tellus
              at urna
              condimentum mattis pellentesque id. Lacus laoreet non curabitur gravida. Pulvinar sapien et
              ligula
              ullamcorper malesuada proin libero nunc. Convallis posuere morbi leo urna molestie at
              elementum eu
              facilisis. Magna ac placerat vestibulum lectus mauris ultrices.</p>
            <p>Massa id neque aliquam vestibulum. Elit duis tristique sollicitudin nibh sit amet. Enim
              lobortis
              scelerisque fermentum dui faucibus in ornare quam. Tellus integer feugiat scelerisque varius
              morbi.
              Non
              blandit massa enim nec dui nunc mattis enim. Vulputate mi sit amet mauris commodo quis
              imperdiet
              massa.
              Vivamus at augue eget arcu dictum varius. Id cursus metus aliquam eleifend mi in nulla
              posuere
              sollicitudin. Tincidunt eget nullam non nisi est sit. In eu mi bibendum neque egestas. Dolor
              morbi
              non
              arcu risus quis varius quam quisque. Auctor urna nunc id cursus metus aliquam eleifend.
              Ipsum dolor
              sit
              amet consectetur adipiscing. Nulla aliquet enim tortor at auctor urna. Blandit cursus risus
              at
              ultrices
              mi.
            </p>
            <p>Morbi tristique senectus et netus et malesuada. Metus vulputate eu scelerisque felis
              imperdiet proin
              fermentum. Vitae auctor eu augue ut lectus arcu bibendum at. At in tellus integer feugiat
              scelerisque
              varius morbi enim. Viverra orci sagittis eu volutpat odio. Integer malesuada nunc vel risus
              commodo
              viverra maecenas. In nisl nisi scelerisque eu ultrices vitae auctor eu. Et ultrices neque
              ornare
              aenean
              euismod elementum. Ornare arcu dui vivamus arcu felis bibendum ut tristique. Molestie a
              iaculis at
              erat
              pellentesque adipiscing commodo elit. Facilisis volutpat est velit egestas dui. Tristique
              senectus
              et
              netus et malesuada fames ac turpis. Risus pretium quam vulputate dignissim suspendisse. Et
              magnis
              dis
              parturient montes nascetur ridiculus. Lorem mollis aliquam ut porttitor leo a diam
              sollicitudin
              tempor.
            </p>
            <p>Nibh venenatis cras sed felis eget. Tortor consequat id porta nibh venenatis cras sed. Ornare
              massa
              eget
              egestas purus viverra accumsan in nisl nisi. Magnis dis parturient montes nascetur ridiculus
              mus
              mauris
              vitae. Sapien faucibus et molestie ac feugiat sed. Blandit aliquam etiam erat velit
              scelerisque in
              dictum non consectetur. Faucibus et molestie ac feugiat sed lectus vestibulum mattis
              ullamcorper. At
              tempor commodo ullamcorper a lacus vestibulum. Sed risus ultricies tristique nulla aliquet
              enim
              tortor.
              Volutpat lacus laoreet non curabitur gravida arcu ac. Nibh nisl condimentum id venenatis a
              condimentum
              vitae sapien. Cras pulvinar mattis nunc sed blandit. Odio aenean sed adipiscing diam donec
              adipiscing
              tristique risus. Tempus urna et pharetra pharetra massa massa ultricies mi. Dolor sit amet
              consectetur
              adipiscing elit duis tristique sollicitudin nibh. Quis risus sed vulputate odio ut.
              Consequat mauris
              nunc congue nisi vitae suscipit. Quis risus sed vulputate odio ut. Massa sapien faucibus et
              molestie
              ac
              feugiat sed.</p>
            <p>Neque aliquam vestibulum morbi blandit cursus risus at ultrices mi. Et malesuada fames ac
              turpis. Ut
              lectus arcu bibendum at. Euismod quis viverra nibh cras. Eget nunc lobortis mattis aliquam
              faucibus
              purus in massa. Nunc lobortis mattis aliquam faucibus purus in massa tempor nec. Sed
              adipiscing diam
              donec adipiscing tristique risus nec. In nibh mauris cursus mattis molestie a iaculis. Nunc
              lobortis
              mattis aliquam faucibus purus in massa. At urna condimentum mattis pellentesque.</p>
            <p>Feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Justo eget magna fermentum
              iaculis eu
              non.
              Mattis molestie a iaculis at erat pellentesque. Eget velit aliquet sagittis id. Turpis massa
              sed
              elementum tempus egestas sed. Vestibulum morbi blandit cursus risus at ultrices mi tempus
              imperdiet.
              Mauris augue neque gravida in fermentum et. Sed id semper risus in hendrerit gravida rutrum
              quisque.
              Auctor eu augue ut lectus arcu bibendum at varius vel. Arcu dui vivamus arcu felis bibendum
              ut
              tristique. Cursus sit amet dictum sit. Scelerisque in dictum non consectetur. Ullamcorper
              malesuada
              proin libero nunc consequat interdum. Fusce ut placerat orci nulla pellentesque dignissim
              enim.
              Egestas
              quis ipsum suspendisse ultrices. Ut eu sem integer vitae justo eget magna fermentum iaculis.
              Sit
              amet
              dictum sit amet justo donec.</p>
            <p>Diam phasellus vestibulum lorem sed risus ultricies. Aliquet lectus proin nibh nisl
              condimentum id
              venenatis a condimentum. Pellentesque id nibh tortor id aliquet. Integer vitae justo eget
              magna
              fermentum iaculis. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet. Dolor
              sit amet
              consectetur adipiscing elit duis tristique sollicitudin. Ultrices sagittis orci a
              scelerisque purus
              semper eget. Cursus turpis massa tincidunt dui ut ornare lectus. Morbi tincidunt augue
              interdum
              velit
              euismod in. Nulla facilisi nullam vehicula ipsum a arcu. Dictumst quisque sagittis purus
              sit. Congue
              nisi vitae suscipit tellus mauris a diam maecenas sed. Turpis in eu mi bibendum neque.
              Pellentesque
              habitant morbi tristique senectus. Morbi tristique senectus et netus et malesuada fames. Mi
              sit amet
              mauris commodo quis imperdiet massa. Pellentesque nec nam aliquam sem et tortor. Vel quam
              elementum
              pulvinar etiam non quam. Sed elementum tempus egestas sed sed risus pretium quam vulputate.
            </p>
            <p>Eu lobortis elementum nibh tellus molestie nunc. Nulla aliquet enim tortor at auctor urna
              nunc id
              cursus.
              Enim ut tellus elementum sagittis vitae et leo. Tempor commodo ullamcorper a lacus
              vestibulum sed
              arcu
              non odio. Ultrices neque ornare aenean euismod elementum nisi quis eleifend. Mauris in
              aliquam sem
              fringilla ut morbi tincidunt augue. At volutpat diam ut venenatis tellus in. Sit amet nisl
              suscipit
              adipiscing bibendum est. Eleifend donec pretium vulputate sapien. Nunc vel risus commodo
              viverra
              maecenas accumsan. Urna nec tincidunt praesent semper feugiat. Condimentum vitae sapien
              pellentesque
              habitant morbi. Viverra mauris in aliquam sem fringilla ut. Magna etiam tempor orci eu.
              Molestie at
              elementum eu facilisis sed odio. Eget duis at tellus at. Habitant morbi tristique senectus
              et netus.
            </p>
            <p>Sem fringilla ut morbi tincidunt augue interdum. Ullamcorper eget nulla facilisi etiam
              dignissim.
              Tortor
              vitae purus faucibus ornare suspendisse. Amet justo donec enim diam vulputate ut pharetra
              sit amet.
              Tempus quam pellentesque nec nam aliquam. Fringilla phasellus faucibus scelerisque eleifend
              donec.
              Ante
              in nibh mauris cursus. Nisl vel pretium lectus quam id leo in vitae turpis. A lacus
              vestibulum sed
              arcu
              non odio euismod lacinia. Tincidunt lobortis feugiat vivamus at augue eget arcu. Felis
              imperdiet
              proin
              fermentum leo vel orci. Nisl vel pretium lectus quam id leo. Egestas congue quisque egestas
              diam in
              arcu
              cursus. Aliquet lectus proin nibh nisl condimentum id. Amet nulla facilisi morbi tempus
              iaculis
              urna.
              Sagittis eu volutpat odio facilisis mauris sit. Ac placerat vestibulum lectus mauris
              ultrices eros
              in
              cursus turpis. Viverra vitae congue eu consequat ac felis donec et odio.</p>
            <p>Ornare quam viverra orci sagittis eu volutpat odio. Velit ut tortor pretium viverra
              suspendisse
              potenti
              nullam. Cursus eget nunc scelerisque viverra mauris in aliquam. Mattis nunc sed blandit
              libero.
              Facilisi
              etiam dignissim diam quis enim lobortis scelerisque fermentum. Amet cursus sit amet dictum
              sit amet
              justo. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada.
              Venenatis
              tellus in metus vulputate eu scelerisque felis imperdiet proin. Vitae semper quis lectus
              nulla at
              volutpat. Suspendisse interdum consectetur libero id. Commodo elit at imperdiet dui accumsan
              sit
              amet.
              Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Ornare massa eget egestas
              purus
              viverra. Auctor elit sed vulputate mi. Tellus elementum sagittis vitae et leo. Dignissim
              sodales ut
              eu
              sem integer vitae justo.</p>
            <p>Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Vel facilisis
              volutpat est
              velit
              egestas dui id ornare. Proin libero nunc consequat interdum varius. Adipiscing tristique
              risus nec
              feugiat in fermentum posuere urna. Ipsum dolor sit amet consectetur adipiscing elit
              pellentesque
              habitant. Nisl rhoncus mattis rhoncus urna neque viverra justo. Maecenas pharetra convallis
              posuere
              morbi leo urna molestie. Id faucibus nisl tincidunt eget nullam non nisi. Viverra adipiscing
              at in
              tellus integer feugiat scelerisque. Pellentesque id nibh tortor id aliquet lectus proin. Ac
              orci
              phasellus egestas tellus rutrum. Diam volutpat commodo sed egestas egestas fringilla. Tellus
              rutrum
              tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Erat pellentesque adipiscing
              commodo
              elit at imperdiet dui accumsan sit. Semper auctor neque vitae tempus quam pellentesque. Diam
              quis
              enim
              lobortis scelerisque fermentum. Dictum non consectetur a erat nam at lectus.</p>
            <p>Metus dictum at tempor commodo. Imperdiet massa tincidunt nunc pulvinar sapien et. Feugiat in
              fermentum
              posuere urna nec tincidunt. Ridiculus mus mauris vitae ultricies leo integer. Vulputate ut
              pharetra
              sit
              amet aliquam id diam maecenas ultricies. Leo vel fringilla est ullamcorper eget nulla
              facilisi
              etiam.
              Volutpat ac tincidunt vitae semper quis lectus nulla at. A scelerisque purus semper eget
              duis. Dui
              faucibus in ornare quam viverra. Semper viverra nam libero justo. Nulla facilisi nullam
              vehicula
              ipsum a
              arcu cursus. Nec feugiat nisl pretium fusce. Sagittis id consectetur purus ut faucibus
              pulvinar
              elementum. Dui accumsan sit amet nulla facilisi. Mauris augue neque gravida in fermentum et
              sollicitudin. Dictum at tempor commodo ullamcorper a.</p>
          </section>
          <section>
            <h2>Documents</h2>
            <table>
              <tbody>
                <tr>
                  <td>Document A</td>
                  <td><a href="."><img src="assets/download.svg" /></a></td>
                </tr>
                <tr>
                  <td>Document B</td>
                  <td><a href="."><img src="assets/download.svg" /></a></td>
                </tr>
                <tr>
                  <td>Document C</td>
                  <td><a href="."><img src="assets/download.svg" /></a></td>
                </tr>
                <tr>
                  <td>Document D</td>
                  <td><a href="."><img src="assets/download.svg" /></a></td>
                </tr>
                <tr>
                  <td>Document E</td>
                  <td><a href="."><img src="assets/download.svg" /></a></td>
                </tr>
                <tr>
                  <td>Form Placeholder With A Really Long and Pointless Name</td>
                  <td><a href="."><img src="assets/download.svg" /></a></td>
                </tr>
              </tbody>
            </table>
          </section>
        </main>
        <Ticker contents={["REMINDER: Don't forget to upload your report duty form within TWO WEEKS of starting your practicum.",
          "REMINDER: Don't forget to pay your practicum fees via FIMS.",
          "Good luck with your internship."]} />
      </div>
    </div>
  );
}

export default App;
