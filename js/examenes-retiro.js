// Exámenes del retiro mensual: hay un texto por mes y según el año sea par
// o impar (los documentos "rtm sm exámenes pares/impares"). Este mismo dato
// alimenta dos sitios: el examen del retiro más próximo en retiro-mensual.html
// y la lista completa de examenes-retiro.html. EDITAR AQUÍ para cambiar un texto.
(function () {
  var NOMBRES_MES = ["", "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

  var ORDEN_CURSO = [9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8];

  var EXAMENES = {
    9: {
      impar: {
        titulo: "Años impares — «Viendo la fe de ellos…»",
        preguntas: [
          "«Vivo, pero no soy yo el que vive, es Cristo quien vive en mí» (Gal 2,20). ¿Deseo cada vez con más intensidad que la vida de Cristo sea mi vida?",
          "¿Tengo fe en el amor incondicional de Dios por mí, que me quiere y conoce como soy? ¿Reconozco los talentos que me ha dado y me ilusiona cultivarlos para llevar a cabo las maravillas que Él ha soñado conmigo?",
          "«No soy digno de que entres en mi casa (…). Pero dilo de palabra y mi criado quedará sano» (Lc 7,6-7). ¿Me apoyo en esta oración, llena de fe y humildad, cuando pido por tantas intenciones para el bien de las almas?",
          "«No tengo plata ni oro; pero lo que tengo, te lo doy: ¡en el nombre de Jesucristo Nazareno, levántate y anda!» (Hch 3,6). ¿Estoy convencido de que la mayor manifestación de caridad es unir a las almas a Jesús? ¿Podría crecer en audacia al hablar de Él, venciendo los respetos humanos?",
          "«El Señor abrió su corazón para que comprendiese lo que Pablo decía» (Hch 16,14): así narra san Lucas la conversión de Lidia. ¿Ruego al Espíritu Santo que abra la puerta de los corazones de quienes me oyen en los medios de formación? ¿Pido su ayuda para saber transmitir con don de lenguas el Amor de Dios por cada uno?",
          "Para san Pablo, lo importante era «correr hacia la meta, para alcanzar el premio al que Dios nos llama desde lo alto por Cristo Jesús» (Flp 3,14). En la labor de formación, ¿tengo presente que mi misión es mover a todos a centrar la mirada en Cristo para vencer en la lucha por la santidad?",
          "Ayúdame a clamar: ¡Jesús, almas!... ¡Almas de apóstol!: son para ti, para tu gloria (Camino, n. 804). ¿Pongo en primer lugar la oración en la labor apostólica? ¿Me mantengo sereno y esperanzado cuando no veo resultados inmediatos?",
          "«Emitte lucem tuam et veritatem tuam, envía tu luz y tu verdad» (Sal 43,3). ¿Amo la luz de Dios y me acerco a ella en la oración para conocerme mejor? ¿Soy sincero en la oración, muestro con humildad mis heridas al Señor y dejo que Él las cure?",
          "¿Procuro abrir mi corazón en la dirección espiritual, sabiendo que Dios se sirve de quien me escucha para ayudarme?",
          "«Mirad a la doncella de Nazaret. Convencida de su pequeñez, nada la distrae de Dios» (Beato Álvaro, Carta pastoral, 2-II-1979). ¿Cuento con la ayuda de mi madre la Virgen para trabajar con alegría para el Señor?"
        ]
      },
      par: {
        titulo: "Años pares — «Nosotros no sabemos pedir como conviene»",
        preguntas: [
          "El Espíritu Santo trae a nuestra memoria las palabras del Evangelio: Conviene orar perseverantemente y no desfallecer (Lc 18,1). La oración es el fundamento de toda labor sobrenatural; con la oración somos omnipotentes (Amigos de Dios, n. 238). ¿Confío en la fuerza de la oración para vivir plenamente mi misión? ¿Desarrollo el instinto de rezar para superar los obstáculos que voy encontrando en mi camino?",
          "«Tú, en cambio, cuando ores, entra en tu cuarto, cierra la puerta y ora a tu Padre, que está en lo secreto, y tu Padre, que ve en lo secreto, te lo recompensará» (Mt 6,6). En mis ratos de oración, ¿busco entrar en lo más íntimo de mi corazón para, desde ahí, dirigirme al Señor? ¿Intento encontrar los mejores lugares y momentos para mi oración?",
          "«Cuando recéis, no uséis muchas palabras, como los gentiles, que se imaginan que por hablar mucho les harán caso. No seáis como ellos, pues vuestro Padre sabe lo que os hace falta antes de que lo pidáis» (Mt 6,7-8). ¿Estoy convencido de que Dios me escucha siempre y quiere para mí lo mejor?",
          "Reconociendo nuestra miseria, iremos como los hijos pequeños a los brazos de nuestra Madre, al regazo de la Madre de Dios, que es Madre nuestra, y al Corazón de Cristo Jesús (En diálogo con el Señor, p. 62). ¿Tengo la confianza de meterme en el regazo de mi Madre durante la oración, y me atrevo a pedir desde ahí a su Hijo todo lo que necesito?",
          "¿En la oración aprovecho para considerar que Dios es mi Padre, y me entretengo con Él como un hijo charla con su padre (Amigos de Dios, n. 145)? ¿Disfruto estos ratos de intimidad contándole lo que me ha pasado, cómo me siento, cuáles son mis esperanzas, etc.?",
          "«Te doy gracias Dios mío por los buenos propósitos, afectos e inspiraciones… » (Oración después de la meditación). ¿Aprovecho las luces que Dios me otorga y procuro definir con su ayuda algunas metas pequeñas para vivir mejor mi entrega a Él y a mis hermanos?",
          "¿Se alimenta mi diálogo con Dios también de los sucesos de cada jornada, en los que intento descubrir su mano paterna? ¿Veo en la oración un momento privilegiado para discernir qué es lo que me pide Dios en mi trabajo, en la vida en familia, en el apostolado?",
          "«La mies es abundante y los obreros pocos; rogad, pues, al dueño de la mies que envíe obreros a su mies» (Lc 10,2). ¿Procuro seguir esta petición de Cristo Sacerdote, y rezo con la ilusión de mover su Corazón para que envíe más apóstoles a su Obra?",
          "Si no hacéis de los chicos hombres de oración, habéis perdido el tiempo (Instrucción, 9-I-1935, n. 133). ¿Me ilusiona compartir con mis amigos la fe y aprender juntos a hablar con Dios? ¿Acudo a san José para me enseñe a ser buen maestro de oración?",
          "Madre nuestra, tú has traído a la tierra a Jesús, que nos revela el amor de nuestro Padre Dios; ayúdanos a reconocerlo, en medio de los afanes de cada día; remueve nuestra inteligencia y nuestra voluntad, para que sepamos escuchar la voz de Dios, el impulso de la gracia (Es Cristo que pasa, n. 174). ¿Cómo podría ayudar más a las personas que trato a escuchar la voz de Dios y el estímulo de su cariño?"
        ]
      }
    },
    10: {
      impar: {
        titulo: "Años impares — «Se han abierto los caminos divinos de la tierra»",
        preguntas: [
          "Gratias tibi, Deus, gratias tibi! Un cántico de acción de gracias tiene que ser la vida de cada uno, porque ¿cómo se ha hecho el Opus Dei? Lo has hecho Tú, Señor, con cuatro chisgarabís… (Notas de una meditación, 27-III-1975). ¿Me llena de agradecimiento descubrir que Dios cuenta conmigo para hacer la Obra?",
          "Nuestro Padre se preguntaba con frecuencia: «¿Son mis amigos, mi Ángel Custodio y los Custodios de los demás?» (Beato Álvaro del Portillo, Entrevista sobre el fundador del Opus Dei, pp. 126-127). ¿Cómo podría apoyarme más en su intercesión?",
          "Por tanto, tened una profunda convicción de que el cielo está empeñado en que se realice (Instrucción, 19-III-1934, n. 47). ¿Me llena de paz saber que es Dios quien hace la Obra y que siendo fiel no debo inquietarme ante la falta aparente de frutos?",
          "Esa convicción sobrenatural de la divinidad de la empresa acabará por daros un entusiasmo y amor tan intenso por la Obra, que os sentiréis dichosísimos sacrificándoos para que se realice (Instrucción, 19-III-1934, n. 49). ¿Pienso en el regalo que Dios me hace también cuando el camino se vuelve un poco cuesta arriba?",
          "Señor, ¿me dejas que me queje un poquitín? Hay momentos (por mi miseria: mea culpa), en los que me parece que no puedo más. Ya me quejé. Perdón (Apuntes íntimos, n. 1352). ¿Me abandono con esta confianza y cariño al Señor cuando llega el cansancio en el trabajo, una enfermedad inesperada, o cuando no se ven los resultados?",
          "«El Señor tu Dios está en medio de ti, valiente y salvador; se alegra y goza contigo, te renueva con su amor; exulta y se alegra contigo como en día de fiesta» (So 3,17-18). ¿Procuro descubrir y redescubrir este Amor apasionado de Dios por mí que le hace disfrutar conmigo? ¿De qué maneras puedo transmitir esta alegría a mi alrededor?",
          "«Tú eres mi hijo. Yo te he engendrado hoy» (Sal 2,7). ¿Vivo cada día con el gozo de saberme hijo de Dios? ¿Reconozco esta verdad cuando la sombra del pesimismo amenaza con empañar mi mirada hacia el mundo o mi propia vida?",
          "Las grandes audacias son siempre de los niños. –¿Quién pide... la luna? (Camino, n. 857). ¿Es mi confianza en el Amor de mi Padre Dios así de audaz?",
          "¿Me muevo en el mundo con la soltura de un hijo que sabe que su Padre se lo ha dado por heredad? ¿Quiero servir a través de mi trabajo a la sociedad en la que vivo?",
          "Pero el trabajo en sí mismo no es una pena, ni una maldición o un castigo (…). Es hora de que los cristianos digamos muy alto que el trabajo es un don de Dios (Es Cristo que pasa, n. 47). ¿Me apasiona dar forma al mundo a través de mi labor profesional y sé que a través de ella participo en la misión redentora de Cristo, también cuando enfrento el dolor y la cruz?"
        ]
      },
      par: {
        titulo: "Años pares — «El cielo está empeñado en que la Obra se realice»",
        preguntas: [
          "«Mi ángel irá delante de ti» (Ex 23,23). ¿Me sé acompañado por los santos ángeles en el camino de mi vocación, y acudo confiado a su intercesión poderosa?",
          "En la Obra caben todos los que tengan el corazón grande, aunque hayan sido mayores sus flaquezas (Instrucción, 19-III-1934, n. 65). ¿Vivo con la confianza de que la gracia de Dios es mayor que mis limitaciones y las de mis hermanos, y que contando con ella podemos lanzarnos a hacer cosas grandes?",
          "«Él me dijo: “Te basta mi gracia, porque la fuerza se perfecciona en la flaqueza”» (2 Co 12,9). ¿La experiencia de mis debilidades me lleva a rezar más, rogando al Señor que me conceda su fortaleza? ¿Le pido luces para saber cómo enfrentar mejor mi lucha interior?",
          "Rezad mucho por el Papa. Queredlo mucho, ¡queredlo mucho! Porque necesita de todo el cariño de sus hijos. Y esto lo entiendo muy bien: lo sé por experiencia, porque no soy como una pared, soy un hombre de carne (Notas de una tertulia, 11-V-1965). ¿Pido a san Miguel por la Iglesia entera, de modo especial por el Papa y los obispos, confiando en que mi oración puede ser una ayuda real y eficaz? ¿Cuento con su protección en el camino de Amor al que Dios me ha llamado?",
          "«El ángel, entrando en su presencia, dijo: “Alégrate, llena de gracia, el Señor está contigo”» (Lc 1,28). ¿Acudo a san Gabriel para que las familias que conozco sepan hacer de su hogar una nueva Betania? ¿Le encomiendo que muchas madres y padres amen la vocación que Dios ha elegido para sus hijos?",
          "«Respondió el ángel: “Sí. He estado allí muchas veces y conozco bien todos los caminos”» (Tob 5,6). ¿Pongo bajo la intercesión del arcángel Rafael a los jóvenes que conozco para que cada uno descubra que Dios le ama? ¿Procuro acompañarlos con cariño en su camino personal, compartir sus ilusiones nobles y abrirles horizontes?",
          "Acompañad también a los hombres –vuestros amigos, vuestros colegas, vuestros parientes, ¡vuestros hermanos!– con vuestro ejemplo, con vuestra doctrina, con vuestro trabajo y con vuestra serenidad y con vuestra alegría (Carta 24-III-1930, n. 20). ¿Procuro ayudar a las personas con paciencia, ajustándome al ritmo que Dios quiere?",
          "Habéis de procurar ganaros al Ángel Custodio de aquél, a quien queráis atraer, porque el Ángel Custodio es siempre un gran cómplice. –Conozco casos verdaderamente hermosos (Instrucción, 1-IV-1934, n. 13). ¿Me apoyo en la intercesión de los santos ángeles custodios en la labor apostólica? ¿Les encomiendo a aquellos que podrían tener vocación a la Obra?",
          "«Nosotros, que somos muchos, formamos en Cristo un solo cuerpo, siendo todos miembros los unos de los otros» (Rm 12,5). ¿Contemplo con agradecimiento la variedad de carismas e instituciones de la Iglesia y rezo por la vitalidad apostólica de todos sus hijos?",
          "«A cada uno se le concede la manifestación del Espíritu para provecho común» (1 Co 12,7). ¿Soy consciente de que viviendo con amor mi vocación estoy haciendo un gran servicio a la Iglesia? ¿De qué maneras podría seguir compartiendo la formación que recibo, con humildad, sin sentirme mejor que nadie?"
        ]
      }
    },
    11: {
      impar: {
        titulo: "Años impares — «Reunidos en comunión»",
        preguntas: [
          "Me acojo a tus méritos infinitos, a los méritos de tu Madre, a los del Patriarca San José. Y añado: ¡y al oro de mis hijos, que brilla en el mundo entero! (…) Y concluyo diciéndote: y a esas chispicas de luz que hay en mi pobre vida (Mientras nos hablaba en el camino, p. 355). ¿Se apoya mi lucha en este fundamento fuerte y seguro?",
          "Tendrás más facilidad para cumplir tu deber al pensar en la ayuda que te prestan tus hermanos (Camino, 549). ¿Cuento con la comunión de los santos para seguir dando pasos en el camino hacia la santidad? ¿Me sé apoyado por la oración de todos?",
          "«Nosotros amamos, porque Él nos amó primero» (1 Jn 4,19). ¿Me dejo arrastrar por este amor en mis luchas –grandes o pequeñas– por alcanzar la santidad?",
          "«Os digo que así también habrá más alegría en el cielo por un solo pecador que se convierta que por noventa y nueve justos que no necesitan convertirse» (Lc 15,7). ¿Me consuela y me llena de alegría saber que a Dios le agrada verme comenzar y recomenzar, incluso varias veces cada día?",
          "¿Me dejo maravillar en mi oración por la personalidad de Cristo y lo aprecio también como modelo de virtudes? ¿Deseo crecer en virtudes humanas que serán fundamento de mi vida de fe, esperanza y caridad?",
          "«Sobre todo, revestíos con la caridad, que es el vínculo de la perfección» (Col 3,14). ¿Encuentro en la caridad la medida de todas las virtudes? ¿Procuro poner amor en la práctica de las virtudes, y rectifico la intención si se asoma la vanidad, el afán de quedar bien, el perfeccionismo?",
          "¿Agradezco a Dios la ayuda que recibo en Casa para parecerme cada vez más, también en lo humano, a Jesús? ¿Acepto con apertura y una actitud de mejora las sugerencias que me hacen y lo veo como una ocasión para identificarme más con Jesús?",
          "«Simón, hijo de Juan, ¿me amas? (…) Pastorea mis ovejas» (Jn 21,16). ¿Veo mi dedicación a las almas como un modo de corresponder al cariño de Jesús por mí? ¿Deseo enamorarme mucho del Señor para transmitir a los demás la alegría de estar junto a Él?",
          "Mis buenas amigas las Ánimas benditas del Purgatorio (Apuntes íntimos, n. 823). ¿Rezo y ofrezco sacrificios por ellas y confío en la ayuda que pueden prestarnos?",
          "Llenaos de alegría, pensando que nuestra oración se une a la de aquellos que convivieron con Jesucristo, a la incesante plegaria de la Iglesia triunfante, purgante y militante, y a la de todos los cristianos que vendrán (Notas de una reunión familiar, septiembre de 1973; cit. en Crónica X-1973, p. 31). ¿Llena mi alma esta forma de rezar unido a toda la Iglesia?"
        ]
      },
      par: {
        titulo: "Años pares — «La misericordia de Dios Padre nos ha dado como Rey a su Hijo»",
        preguntas: [
          "Jesús desea reinar, antes que nada en el corazón, en tu corazón (Es Cristo que pasa, n. 31). ¿Qué es lo que llena mi corazón? ¿Deseo que el Señor sea dueño de todos mis deseos, afectos y pensamientos, hasta los más pequeños y aparentemente intrascendentes? ¿Sueño con alcanzar la gracia de que mi corazón vibre al mismo ritmo que el suyo?",
          "Especialmente te consagramos nuestros pobres corazones, para que no tengamos otra libertad que la de amarte a Ti, Señor (Consagración del Opus Dei al Sagrado Corazón de Jesús). ¿Cómo procuro guardar mi corazón entero y libre para amar al Señor? ¿Pongo los medios para apegarme a Dios y todo lo suyo, y evitar lo que me aparta de Él?",
          "Cuando el cariño pasa por el Corazón Sacratísimo de Jesús y por el Dulcísimo Corazón de María, la caridad fraterna se ejercita con toda su fuerza humana y divina. Anima a soportar la carga, quita pesos, asegura la alegría en la pelea (Carta 14-II-1974, n. 23). ¿Comparto con los de Casa el cariño que recibo del Señor? ¿Le agradezco cómo me quieren mis hermanos?",
          "El cariño verdadero no es algo pegadizo, es algo que fortalece las alas del alma para alzarse más alta; la caridad fraterna, que no busca su propio interés (cfr. 1 Co 13,5), permite volar para alabar al Señor con un espíritu de sacrificio gustoso (Carta 14-II-1974, n. 23). ¿Ofrezco mi cariño a los demás a pesar de que en ocasiones no encuentre la correspondencia que esperaba? ¿Le pido confiadamente al Señor que me ayude a amar desde su Corazón y de una manera desinteresada?",
          "«Descansa solo en Dios, alma mía, porque él es mi esperanza» (Sal 62,6). ¿Cuido la templanza, evitando que el corazón se apegue a cosas que no pueden llenarlo?",
          "¿Sé prescindir, con la libertad del amor, de algunas comodidades para ofrecérselas al Señor? ¿Vivo habitualmente algunas mortificaciones pequeñas con las que me puedo unir cada día un poco más a Jesús en la Cruz?",
          "«Quien entre vosotros quiera llegar a ser grande, que sea vuestro servidor» (Mt 20,26). ¿Me doy cuenta de que, al servir a los demás, el Señor está engrandeciendo mi vida? ¿Enfoco mi trabajo desde esta perspectiva de servicio a las personas que me rodean y a la sociedad entera?",
          "¿Deseo contribuir con mi trabajo y apostolado a «recapitular en Cristo todas las cosas» (Ef 1,10)? ¿Me intereso por lo que sucede en la sociedad en la que vivo y cumplo con mis deberes ciudadanos? ¿Cómo podría seguir desarrollando mis talentos para servir mejor a la sociedad?",
          "Al animarnos a vivir nuestra libertad, san Josemaría añadía: Respetaréis sinceramente las legítimas opiniones de los demás, y sabréis no solo renunciar a vuestra opinión, cuando veáis que no respondía bien a la verdad, sino también aceptar otro criterio, sin sentiros humillados por haber cambiado de parecer (Carta 9-I-1951, n. 25). ¿Amo apasionadamente la libertad de los demás en todo lo opinable, sin provocar enfrentamientos ni tensiones innecesarias? ¿Me doy cuenta de la riqueza que supone convivir con personas distintas y lo que puedo aprender de ellas?",
          "¿Están mis palabras llenas de caridad con todos, también con los que creo que se equivocan? ¿Procuro difundir, con mis comentarios y actitudes, un ambiente de fraternidad cristiana, que valora la dignidad de cada persona, especialmente de los pobres y marginados?"
        ]
      }
    },
    12: {
      impar: {
        titulo: "Años impares — «Descubrir la cercanía de Dios»",
        preguntas: [
          "«Vengo a anunciaros una gran alegría: hoy os ha nacido, en la ciudad de David, el Salvador, que es el Cristo, el Señor» (Lc 2,10-11). ¿La llegada de una nueva Navidad me llena de esperanza como lo hizo en el corazón de los pastores?",
          "«Cuando un silencio apacible lo envolvía todo y la noche llegaba a la mitad de su carrera, tu palabra omnipotente se lanzó desde el cielo» (Sab 18,14-15). ¿Abro en mi corazón un espacio de silencio para acoger al Niño y su Madre bendita? ¿Procuro preparar mi oración diaria fomentando una actitud de recogimiento, evitando el ruido exterior o interior?",
          "Caminamos apresuradamente hacia las montañas, hasta un pueblo de la tribu de Judá (Santo Rosario, 2º misterio gozoso). ¿Acudo a la Virgen María para que me ayude a salir de mi comodidad y buscar ocasiones de servir más en estos días?",
          "La humildad de María se vierte en el Magníficat... Y tú y yo, que somos –que éramos– unos soberbios, prometemos que seremos humildes (Santo Rosario, 2º misterio gozoso). ¿Alabo a Dios con humildad por las maravillas que quiere hacer sirviéndose de mí como instrumento, a pesar de mis flaquezas y errores?",
          "«Y postrándose le adoraron; luego, abrieron sus cofres y le ofrecieron presentes: oro, incienso y mirra» (Mt 2,11). ¿Quiero yo también poner a los pies de Jesús todos mis talentos, convencido de que Él los recibe con una sonrisa? ¿Me ilusiona que Él haga lo que quiera con mi vida, sabiendo que es el mejor modo de que dé fruto?",
          "«En cuanto Isabel oyó el saludo de María, saltó la criatura en su vientre» (Lc 1,41). ¿Se transparenta a mis amigos y familiares la alegría que me da la cercanía de Jesús? ¿Notan en mis palabras y actitudes el gozo de quien se ha entregado a Dios?",
          "El Señor ha venido para que «libres de la mano de los enemigos, le sirvamos sin temor» (Lc 1,74), como hijos de Dios. ¿Encuentro en mi vida de entrega el mejor ejercicio de mi libertad? ¿Me apoyo en la filiación divina para superar mis miedos (al fracaso, el quedar mal, la soledad, etc.) y aventurarme por los caminos que el Señor abre ante mis ojos?",
          "«Sucedió en aquellos días que salió un decreto del emperador Augusto, ordenando que se empadronase todo el Imperio» (Lc 2,1). ¿Me dejo sorprender por el Señor cuando se sirve de medios inesperados para cumplir sus planes en mi vida?",
          "Este Dios mío, tesoro infinito, margarita preciosísima, humillado, hecho esclavo, anonadado con forma de Siervo en el portal donde quiso nacer… (Apuntes íntimos, nn. 1653-1655). ¿Comprendo que cuando acepto, por amor, lo que no me atrae o no acabo de entender se fortalece mi libertad interior?",
          "No me sonrío cuando te veo componer las montañas de corcho del Nacimiento y colocar las ingenuas figuras de barro alrededor del Portal (Camino, n. 557). ¿Busco, con la sencillez de nuestro Padre, vivir la Navidad como él: adorar al Niño, cantarle y bailarle, estrecharlo entre mis brazos con cariño y ternura?"
        ]
      },
      par: {
        titulo: "Años pares — «¡Qué buen tiempo para remozar el deseo, la añoranza, las ansias sinceras por la venida de Cristo!»",
        preguntas: [
          "Esta mañana pedí a Jesús –no le pedí, digo mal– expuse a Jesús mis deseos de prepararme muy bien, durante el Adviento, para cuando el Niño venga (Apuntes íntimos, 29-XI-1931). ¿Siento la urgencia de una nueva conversión, para que Cristo esté aún más en el centro de mi vida? ¿Qué pasos podría dar en este tiempo de Adviento, con la ayuda del Señor?",
          "Señora, Madre nuestra, el Señor ha querido que fueras tú, con tus manos, quien cuidara a Dios: ¡enséñame –enséñanos a todos– a tratar a tu Hijo! (Forja, n. 84). ¿Acudo a la Virgen para que me ayude a cuidar con delicadeza de enamorado el trato con Dios? ¿Doy prioridad a lo largo del día a mis prácticas de piedad, evitando las prisas?",
          "«El poder del Altísimo te cubrirá con su sombra» (Lc 1,35). ¿Me sé acompañado por el Espíritu Santo a lo largo del día, y sé que me quiere dar su fuerza y su luz para enfrentar las dificultades? ¿Procuro seguir sus inspiraciones para que Jesús se forme cada vez más en mi vida?",
          "«Libres para amar: éste es el sentido de nuestro espíritu de pobreza, austeridad y desprendimiento» (Carta pastoral, 14-II-2017, n. 8). ¿Me ilusiona liberar mi corazón de falsas necesidades para tratar con mayor vibración al Niño que nace en medio de la pobreza? ¿Podría mejorar en algún aspecto el modo en que vivo el desprendimiento? ¿Le pido su ayuda para vivir con alegría las consecuencias de nuestro espíritu de desprendimiento?",
          "«Siendo rico, se hizo pobre por vosotros para enriqueceros con su pobreza» (2 Co 8,9). ¿Aprendo de Jesús a vivir con lo que realmente necesito, al tiempo que le agradezco los innumerables dones que me envía cada día? ¿Sé disfrutar con lo que tengo, evitando las quejas?",
          "«Como pobres, pero enriqueciendo a muchos; como quienes nada tienen, aunque poseyéndolo todo» (2 Co 6,10). ¿Me ilusiona desarrollar esa grandeza de espíritu que lleva a hacer rendir los recursos materiales en servicio de los demás? ¿Procuro vivir la sobriedad pensando también en cuidar nuestro mundo, esa casa común que Dios ha dado a sus hijos?",
          "Fe como la de los Reyes Magos: la convicción de que ni el desierto, ni las tempestades, ni la tranquilidad de los oasis nos impedirán llegar a la meta del Belén eterno: la vida definitiva con Dios (Es Cristo que pasa, n. 32). ¿Cómo podría ayudar a mis amigos y familiares a encontrar también al Niño Jesús en esta Navidad?",
          "«Y cuando oyó Isabel el saludo de María, el niño saltó en su seno, e Isabel quedó llena del Espíritu Santo» (Lc 1,41). Como la Virgen, ¿podría llevar la alegría de la cercanía de Jesús a algún familiar o amigo que quizá está esperando una visita, una llamada, un detalle de cariño?",
          "Ante la cercanía del tiempo de Navidad, ¿me ilusiona ayudar a que mis hermanos encuentren un hogar luminoso y alegre en nuestro centro? ¿De qué maneras podría hacer más agradable la vida en familia durante esos días?",
          "Gratias tibi, Deus, gratias tibi! ¿Doy gracias a Dios por este año que termina y por todas las bendiciones que nos ha regalado? ¿Transmito a mi alrededor una visión llena de esperanza y optimismo ante el próximo año?"
        ]
      }
    },
    1: {
      impar: {
        titulo: "Años impares — «Para que mi alegría esté en vosotros»",
        preguntas: [
          "«Después de ser bautizado, Jesús salió del agua (...) Y una voz desde los cielos dijo: Este es mi Hijo, el amado, en quien me he complacido» (Mt 3,16-17). ¿Descubro la mirada complaciente de Dios sobre mí, su hijo amado, incluso cuando no he sabido corresponder a su amor infinito?",
          "En Caná María pide, insiste, sin desanimarse, con perseverancia. –Y cómo logra (Camino, n. 502). ¿Acudo a mi madre, la Virgen Santísima, para que me ayude a orar con esa audacia y sencillez?",
          "¿Tengo en mi alma la confianza necesaria en mi Padre Dios para pedirle, como el niño pequeño, ¡la luna! (cfr. Camino, n. 857)? ¿Rezo por grandes intenciones, como la santidad de todos en la Obra, la extensión de la labor apostólica, la conversión de la gente alejada del Señor?",
          "«El que me ama guardará mi palabra, y mi Padre lo amará, y vendremos a él y haremos morada dentro de él» (Jn 14,23). ¿Me maravilla saber que mi corazón es morada de la Santísima Trinidad? ¿Procuro compartir con el Señor las incidencias de la jornada, recogiéndome en un diálogo íntimo y confiado?",
          "«Dios mío, tú alumbras mis tinieblas. Fiado en ti, me meto en la refriega, fiado en mi Dios, asalto la muralla» (Sal 18, 29-30). Ante los obstáculos que enfrento en mi camino, ¿levanto mi mirada y veo a mi Padre que me espera, más allá de las dificultades de ahora? ¿Abandono en sus manos mis inseguridades y me lanzo de nuevo a una lucha de amor?",
          "«El amor de Dios ha sido derramado en nuestros corazones por medio del Espíritu Santo que se nos ha dado» (Rm 5,5). ¿Estoy convencido de que, si soy dócil, el Espíritu Santo me colmará de su Amor, sus dones y frutos? ¿Hay algún paso, aunque parezca pequeño, que podría dar para corresponder mejor a sus inspiraciones?",
          "«Id al mundo entero y predicad el Evangelio a toda criatura» (Mc 16,15). ¿Me dejo contagiar por la locura de amor del Corazón de Cristo por las almas, y procuro llevarle a las personas que conozco o trato?",
          "¿Hay algo en mi carácter que me haga difícil compartir con mis amigos y familiares la alegría que Dios me ha regalado?",
          "¿Busco cuidar la vida en familia, para que mis hermanos puedan experimentar el «ciento por uno» (Mc 10,30) que nos ha prometido el Señor? ¿Me intereso por sus cosas, sé estar en los detalles, les dedico tiempo?",
          "San Josemaría sentía vivamente la alegría del apostolado: Un nuevo loco..., para el manicomio (Camino, n. 808). ¿Fomento el sueño apostólico de que mis amigos puedan llegar a ser amigos íntimos de Jesucristo? ¿Cómo podría hablarles más sobre la amistad con Él?"
        ]
      },
      par: {
        titulo: "Años pares — «Hacer visible a todos el rostro del Padre»",
        preguntas: [
          "Para que Él reine en mí, necesito su gracia abundante: únicamente así hasta el último latido, hasta la última respiración, hasta la mirada menos intensa, hasta la palabra más corriente, hasta la sensación más elemental se traducirán en un hosanna a mi Cristo Rey (Santo Rosario, 3º misterio luminoso). ¿Deseo que la gracia trasforme mi capacidad de querer a Dios y a los demás? ¿Confío en que el Señor me lo concederá con abundancia, al pedírselo con fe y humildad?",
          "Nuestro Padre nos anima a seguir tan de cerca al Señor, que oigamos el rumor de sus pisadas, que escuchemos el aliento de su respiración, que percibamos sus más íntimas confidencias con los que había escogido (Memoria del Beato Josemaría, p. 250). ¿Considero que cada norma del plan de vida me ofrece un encuentro con Jesucristo? ¿De qué maneras podría seguir cuidándolas, para manifestar más mi amor hacia Él?",
          "«Hoy se ha cumplido esta Escritura que acabáis de oír» (Lc 4,21). ¿Busco en la meditación del Evangelio la luz que me ayuda a comprender la situación de mi alma y el sentido de lo que sucede a mi alrededor?",
          "San Josemaría nos invitaba a alimentar en nuestras almas la única ambición noble, la única que merece la pena: ir junto a Jesucristo, como fueron su Madre Bendita y el Santo Patriarca (Amigos de Dios, n. 300). ¿Cómo podría poner más a Cristo en el centro de lo que hago cada día? ¿Sé que puedo rectificar la intención cuando descubro que el egoísmo o la vanidad se asoman en mis actividades?",
          "Acompañar a las almas es un arte en el que el modelo es Jesucristo y el modelador, el Espíritu Santo, por medio de la gracia (Carta 8-VIII-1956, n. 37). ¿Cómo procuro que mis amigos vean su existencia a la luz de la vida de Cristo? ¿Acudo al Espíritu Santo para secundar su acción en ellos?",
          "«Seréis mis testigos en Jerusalén, en toda Judea y Samaría y hasta el confín de la tierra» (Hch 1,8). ¿Me ilusiona ser testigo del Señor en mi lugar de trabajo, con mis colegas y amigos? ¿Podría ofrecer mi amistad a más personas, y compartir con ellas la alegría de la fe?",
          "Que vean que les queréis, que os sacrificáis, que tenéis la suficiente ciencia y que sabéis comunicársela con gracia, con luz, con don de lenguas, de modo que os entiendan (Hogares luminosos y alegres, p. 138). ¿Le pido al Señor un amor grande para dedicarme de esa manera a los demás?",
          "«Vio una gran multitud y se llenó de compasión por ella, porque estaban como ovejas que no tienen pastor…» (Mc 6,34). En mis ratos de oración, ¿pido a Jesús que vea el mundo con sus mismos ojos y que mi corazón vibre por las almas como el suyo?",
          "«… y se puso a enseñarles muchas cosas» (Mc 6,34). ¿Alimento mi vida interior con las palabras del Señor para tener convicciones firmes y ser una persona auténtica? ¿Cómo podría poner más cariño y esmero en los medios de formación que imparto?",
          "¿Procuro comprender a mis amigos para ayudarles a corresponder a la acción del Espíritu Santo, a la efusión permanente de las riquezas del Corazón divino? (Es Cristo que pasa, n. 132). ¿Hay alguno al que le pueda abrir nuevos horizontes de entrega?"
        ]
      }
    },
    2: {
      impar: {
        titulo: "Años impares — «La historia de las misericordias de Dios»",
        preguntas: [
          "«Yo soy la madre del amor hermoso y del temor, del conocimiento y de la santa esperanza» (Si 24,18). ¿Agradezco profundamente al Señor ese amor hermoso que me ha mostrado al llamarme? ¿Procuro acudir a santa María para custodiar este amor y hacer que crezca cada día más y más?",
          "Lección de amor hermoso, de vida limpia, de un corazón sensible y apasionado, para que aprendamos a ser fieles al servicio de la Iglesia (Amigos de Dios, n. 277). ¿Veo que mi fidelidad a la elección divina es el mejor servicio que puedo hacer a la Iglesia? ¿Qué formas puede tomar esta fidelidad en este momento de mi vida?",
          "«Que cada uno permanezca en la vocación en que fue llamado» (1 Cor 7,20). ¿Fomento en mi corazón el deseo sincero de permanecer siempre con el Señor? ¿Con qué detalles puedo mostrarle que quiero que se adueñe más de mi corazón y de mis afectos?",
          "«Yo en ellos y Tú en mí, para que sean consumados en la unidad» (Jn 17,23). ¿Comparto este querer del Señor para su Iglesia? ¿Me apoyo en el Espíritu Santo para intentar unir siempre, ahí donde esté, con el Padre, los directores y todos mis hermanos?",
          "¿Deseo ser y hacer la Obra, así como el Señor se la hizo ver a san Josemaría? ¿Aprecio su belleza, en la variedad de sus miembros: mujeres y hombres, laicos y sacerdotes? ¿Cuido delicadamente la separación entre los apostolados de las mujeres y los varones?",
          "El experimentar los cuidados de la Administración, ¿me lleva a agradecer al Señor este don para la Obra y rezar por su santidad y por la labor que realiza? ¿Hago también mi parte para fomentar el ambiente de familia de nuestros centros? ¿Facilito el trabajo de la Administración, aunque suponga cierto esfuerzo?",
          "¿Está presente en mis oraciones la santidad de todos los sacerdotes en la Iglesia? ¿Agradezco al Señor el don del sacerdocio en la Obra y me siento plenamente parte de la misión que cumplimos conjuntamente laicos y sacerdotes?",
          "«En nombre de Cristo os rogamos: reconciliaos con Dios» (2 Cor 5,20). ¿Me ilusiona que a través de mi amistad y mi trato mucha gente se acerque al perdón de Dios en la confesión y a la dirección espiritual con el sacerdote?",
          "«Si alguno quiere venir detrás de mí, que se niegue a sí mismo, que tome su cruz cada día, y que me siga» (Lc 9,23). ¿Sé distinguir a Cristo que me espera abrazado a la Cruz cuando me encuentro con el sacrificio en mis tareas ordinarias? ¿Quiero acompañarlo, por más que esto implique ciertas renuncias?",
          "«Tanto amó Dios al mundo que le entregó a su Hijo Unigénito» (Jn 3,16) ¿Participo de este amor del Señor por el mundo y transmito a mi alrededor optimismo? ¿Procuro ofrecer a Dios lo que me agrada de mi ambiente, y también mi esfuerzo por sanar lo que está enfermo?"
        ]
      },
      par: {
        titulo: "Años pares — «Cristo anuncia el camino para alcanzar la santidad»",
        preguntas: [
          "Jesús enseñaba a la muchedumbre en la montaña diciendo: «Bienaventurados los pobres de espíritu… Bienaventurados los que lloran... Bienaventurados los mansos...» (Mt 5,1 ss). ¿Puedo decir que también yo he descubierto ese deseo del Señor por hacerme muy feliz? ¿Cómo podría renovar este descubrimiento, y convencerme un poco más de que todo lo que me pide Dios contribuye a mi alegría?",
          "¿Procuro enfocar mis actividades diarias desde la lógica divina de las bienaventuranzas, en las que el amor se mezcla con el sacrificio? ¿Confío en que el Señor me acompaña e impulsa con su gracia en medio del esfuerzo por corresponder a su amor?",
          "En nuestro camino hacia la santidad, no es raro que constatemos nuestras limitaciones. Pero ¡qué me importa todo esto si sé que Dios me quiere, si sé que Dios me espera, si sé que Dios se sirve de mí tal y como soy…! (Memoria del Beato Josemaría, p. 81). ¿Fomento esta fe en el amor incondicional de Dios? ¿Existen momentos en los que me deje llevar por el desánimo? ¿Cómo podría renovar en esas situaciones mi confianza en el Señor?",
          "«Fuego he venido a traer a la tierra, y ¿qué quiero sino que ya arda?» (Lc 12,49) ¿Me ilusiona pensar que el Señor me quiere llenar de su amor y darme un corazón vibrante? ¿Rechazo, contando con su ayuda, aquellos hábitos o pensamientos que me puedan llevar a la tibieza?",
          "«La tibieza es una vacilación o negligencia en responder al amor divino» (Catecismo de la Iglesia Católica, n. 2094). ¿Pido luces en el examen de conciencia para descubrir cuándo he dejado de hacer las cosas por amor o me he comenzado a deslizar por la pendiente de la rutina?",
          "El celibato apostólico permite dedicar al Señor el corazón indiviso, y nos proporciona plena libertad para el apostolado (Carta 8-XII-1949, n. 35). ¿Agradezco sinceramente a Dios que me haya concedido este regalo y dejo que me llene cada vez más de su amor? ¿Entiendo mi llamada también como un don para los demás, y procuro transmitirles el amor que el Señor me ha dado?",
          "«Bienaventurados los limpios de corazón, porque ellos verán a Dios» (Mt 5,8). ¿Cuido con delicadeza la virtud de la santa pureza y le pido al Señor que sepa amar con un corazón como el suyo?",
          "Almas de oración, hijos míos, quiere decir trato íntimo con el Señor; significa amor, entrega, vida limpia, pureza (Mientras nos hablaba en el camino, p. 284). ¿Pido al Señor en la oración que me enamore cada vez más de Él y que me ayude a custodiar el don del celibato?",
          "Dios, que es la hermosura, la grandeza, la sabiduría, nos anuncia que somos suyos, que hemos sido escogidos como término de su amor infinito. Hace falta una recia vida de fe para no desvirtuar esta maravilla, que la providencia divina pone en nuestras manos (Es Cristo que pasa, n. 32). ¿Procuro descubrir detrás de todo lo que sucede la mano providente de mi Padre Dios? ¿Transmito alegría y serenidad a mi alrededor, comentando el lado positivo de lo que ocurre, evitando dar importancia excesiva a los fracasos, animando a tener una visión de fe?",
          "Pido a la Madre de Dios que nos sepa, que nos quiera sonreír..., y nos sonreirá. Y, además, en la tierra premiará nuestra generosidad con el mil por uno: ¡el mil por uno, le pido! (Forja, n. 281). ¿Estoy convencido de que a mi Madre la Virgen le alegran los pasos que voy dando hacia la santidad, por más pequeños que me parezcan? ¿Descanso en su cariño por mí?"
        ]
      }
    },
    3: {
      impar: {
        titulo: "Años impares — «Y tu Padre, que ve en lo oculto, te recompensará»",
        preguntas: [
          "«Jesús, lleno del Espíritu Santo, regresó del Jordán y fue conducido por el Espíritu al desierto» (Lc 4,1). ¿Cómo podría secundar la acción del Espíritu Santo en mi alma durante estos días de Cuaresma? ¿Le invoco durante mis ratos de oración para que me ayude a descubrir en qué aspectos de mi vida el Señor me invita a una nueva conversión?",
          "El Señor nos regala en la Cuaresma un spatium verae paenitentiae (un tiempo de verdadera penitencia), como pedimos cada día en las Preces. ¿Agradezco a Dios esta oportunidad para purificarme y celebrar con alegría la Pascua? ¿Procuro cuidar mi lista de pequeñas mortificaciones para que mi corazón esté más centrado en Cristo?",
          "La Cuaresma nos pone delante de estas preguntas fundamentales: ¿avanzo en mi fidelidad a Cristo?, ¿en deseos de santidad?, ¿en generosidad apostólica en mi vida diaria, en mi trabajo ordinario entre mis compañeros de profesión? (Es Cristo que pasa, n. 58).",
          "¿Abro con sinceridad mi alma en la confesión para que Dios la limpie y purifique, sabiendo que este sacramento te inunda de alegría y de fuerza para no desmayar en tu pelea, y para retornar sin cansancio a Dios (Amigos de Dios, n. 214)?",
          "San Josemaría nos animaba a renovar a lo largo del día los actos de contrición, y añadía: Cuantos más, mejor (Surco, n. 480). ¿Me mueven los pecados propios y ajenos a desagraviar al Señor, buscando maneras de consolarlo con mi entrega generosa?",
          "«Ite ad Ioseph» (Gen 41,55). ¿Acudo a san José en mi oración personal, seguro de que él sabrá decirnos muchas cosas sobre Jesús (Es Cristo que pasa, n. 56)?",
          "Mi camino de conversión, ¿pasa también por el afán sincero de abrirme más a las necesidades de mis hermanos y de las personas que trato frecuentemente? ¿Antepongo los gustos de los demás a los míos?",
          "«Seguidme y os haré pescadores de hombres» (Mt 4,19). ¿Procuro renovar mi compromiso de amor con el Señor confiando plenamente en que nunca me faltará su compañía? ¿Me ilusiona pensar en tantas almas con las que podré compartir la alegría de vivir con Cristo?",
          "Nuestro Padre identificaba, entre otros, algunos elementos de la sed de almas: El cúmulo de sacrificios, que sabéis ofrecer; la sonrisa, que os viene a la boca, porque sois hijos de Dios: filiación, que os llena de una serena felicidad (…), que los demás ven y envidian. Añadid, a todo esto, vuestro garbo y vuestra simpatía humana, y tendremos el contenido del compelle intrare (Carta 24-X-1942, n. 9). ¿Pido al Señor que esto se haga realidad también en mi vida?",
          "¿Me apoyo en san José para aprender a cuidar de los demás, viendo en ellos a Jesús?"
        ]
      },
      par: {
        titulo: "Años pares — «Comenzar y recomenzar»",
        preguntas: [
          "«Vino Jesús a Galilea predicando el Evangelio de Dios, y diciendo: –El tiempo se ha cumplido y el Reino de Dios está al llegar; convertíos y creed en el Evangelio» (Mc 1,14-15). ¿Procuro oír la voz de Jesús que me llama a una nueva conversión? ¿Cuáles pueden ser los pasos que el Señor está queriendo que dé en este momento, con su gracia?",
          "«Y vuelto hacia la mujer, le dijo a Simón: “¿Ves a esta mujer? (...): le son perdonados sus muchos pecados, porque ha amado mucho. Aquel a quien poco se le perdona, poco ama» (Lc 7,44.47). ¿Me acerco confiado al Señor para que me perdone las veces que haga falta, y procuro recomenzar como un hijo que quiere agradar a su Padre del Cielo?",
          "¿Encuentro en el examen de conciencia una oportunidad para hacer de hijo pródigo todas las jornadas (Amigos de Dios, n. 214), y dejarme abrazar por mi Padre Dios? ¿Agradezco la ayuda que el Señor me concede a lo largo del día, pido perdón por mis faltas de generosidad y formulo propósitos para crecer en el amor a Dios?",
          "¡¡Señor!! Dame que, a sabiendas, no te ofenda nunca ni venialmente (Apuntes íntimos, n. 15). ¿Cómo puedo cultivar esa misma delicadeza de enamorado con el Señor? ¿Fomento el dolor de amor al contemplar mis faltas y las ajenas, y busco reparar con oración y mortificación?",
          "«Somos, pues, embajadores en nombre de Cristo, como si Dios os exhortase por medio de nosotros. En nombre de Cristo os rogamos: reconciliaos con Dios» (2 Co 5,20). ¿Pido a Dios la audacia para hablar con mis amigos sobre la maravilla de la confesión sacramental?",
          "«Orad para no caer en tentación» (Lc 22,40). ¿Busco la fortaleza en la oración cuando noto que me resulta arduo ser fiel al Señor?",
          "¿Qué hacer para mantener sumiso al enemigo (...)? Pues entretengámosle con pequeños combates lejos de los muros capitales de la fortaleza. (…) Seremos cien veces derrotados, pero ¿qué importa? Cada derrota nos enardecerá para la pelea siguiente (Crecer para adentro, p. 73). ¿Cuento con esta estrategia para mi vida interior, sabiendo que me dará serenidad y optimismo?",
          "Lo mismo que dio origen a tu entrega, hijo mío, habrá de conservarla (Carta 24-III-1931, n. 12). ¿Comprendo que renovar la entrega es renovar el amor que me llevó a darle todo al Señor? ¿Cómo podría seguir haciendo memoria de su amor y de su cercanía? ¿Rezo por todos los de Casa y su fidelidad, consciente de que somos eslabones de una misma cadena?",
          "«José, hijo de David, no temas recibir a María, tu esposa, porque lo que en ella ha sido concebido es obra del Espíritu Santo» (Mt 1,20). ¿Agradezco al Señor la familia sobrenatural que me ha dado? ¿En este momento de mi vida, cómo la puedo seguir cuidando con el mismo esmero de san José?",
          "«José se levantó, tomó al niño y a su madre, de noche, se fue a Egipto y se quedó hasta la muerte de Herodes» (Mt 2,14-15). ¿Recibo con gozo los encargos que me confían, a pesar de que a veces impliquen sacrificio? ¿Sé descubrir detrás de ellos la mano amorosa del Señor y procuro dedicarme a ellos como una manifestación de mi cariño hacia Él?"
        ]
      }
    },
    4: {
      impar: {
        titulo: "Años impares — «Los amó hasta el fin»",
        preguntas: [
          "«Me amó y se entregó a sí mismo por mí» (Gal 2,20). ¿Procuro contemplar la Pasión de Jesús desde esta perspectiva de amor? ¿Me dejo conquistar de nuevo por el Señor al constatar hasta qué punto llegó en su entrega por mí?",
          "Queremos sufrir todo lo que tu sufriste, ofrecerte nuestro pobre corazón contrito (Via Crucis, Prólogo). La contemplación de los padecimientos de Cristo, ¿desemboca en actos de amor y propósitos sinceros de mejora?",
          "«Stabat mater dolorosa, iuxta crucem lacrimosa» («La madre piadosa estaba junto a la Cruz y lloraba», Secuencia Stabat Mater). ¿Con qué detalles puedo consolar yo a Jesús y a mi madre, la Virgen María?",
          "En la Cruz contemplamos la sed de almas de Jesús (cfr. Jn 19,28.30). ¿Caben también en mi corazón todos los hombres y mujeres, con sus debilidades y sufrimientos? ¿Cómo podría dejar al Espíritu Santo que siga ensanchando más mi corazón?",
          "«Ardientemente he deseado comer esta Pascua con vosotros, antes de padecer» (Lc 22,15). ¿Fomento día a día el asombro ante el inefable Amor de predilección que Dios me muestra en la Eucaristía? ¿Cómo me preparo para recibirle?",
          "¿Deseo unir toda mi vida al sacrificio de Jesús que se renueva en la Santa Misa? ¿Me llena de confianza saber que, de esta manera, mi vida es eficaz y redentora, aunque no falten en ella oscuridades y dificultades objetivas?",
          "«Acuérdate, Señor, de tu Iglesia extendida por toda la tierra…» (Plegaria Eucarística II). ¿Procuro que mi oración se expanda en la Santa Misa para interceder por muchas almas? ¿Dejo que los rostros y nombres de quienes quiero acercar a Dios llenen mi Misa?",
          "«Yo os he elegido a vosotros, y os he destinado para que vayáis y deis fruto, y vuestro fruto permanezca» (Jn 15,16). ¿Soy consciente de que, con la fuerza de la Resurrección, mi vida de entrega siempre será fecunda? ¿Miro con esperanza el campo del mundo y transmito optimismo en la labor apostólica?",
          "Hay en nuestra época anhelos grandes y actitudes rastreras, heroísmos y cobardías, ilusiones y desengaños; criaturas que sueñan con un mundo nuevo más justo y más humano (Es Cristo que pasa, n. 132). ¿Trato de comprender a fondo y con delicadeza los anhelos de mis amigos y compañeros, e intento descubrir los afanes nobles que el Señor ha sembrado en sus almas?",
          "En mi lugar de trabajo, en mi centro, en las labores apostólicas que atiendo, ¿procuro ser fermento de alegría cristiana? ¿Busco con creatividad caminos para que más personas lleguen a un trato personal con Jesús?"
        ]
      },
      par: {
        titulo: "Años pares — «¿Saber que me quieres tanto, Dios mío, y... no me he vuelto loco?»",
        preguntas: [
          "«Quedaos aquí y velad conmigo» (Mt 26,38): Jesús nos invita a unirnos a su oración y entrar en sintonía con su Corazón. ¿Me ilusiona permanecer junto a Él en los ratos de oración? ¿Qué medios podría poner para fomentar el recogimiento y evitar las distracciones?",
          "«Y adelantándose un poco, se postró rostro en tierra mientras oraba diciendo: Padre mío, si es posible, aleja de mí este cáliz; pero que no sea tal como yo quiero, sino como quieres tú» (Mt 26,39). ¿Busco en la oración las fuerzas para identificarme con la voluntad de Dios, también cuando me supone esfuerzo o, en alguna ocasión, incluso heroísmo?",
          "«Si alguno quiere venir en pos de mí, que se niegue a sí mismo, tome su cruz y me siga» (Mt 16,24). ¿Estoy convencido de que tomar mi cruz –las cosas que me cuestan– implica cumplir, con la fuerza de la gracia, el pequeño deber de cada instante?",
          "Tú has hecho, Señor, que yo entendiera que tener la Cruz es encontrar la felicidad, la alegría (Notas de una meditación, 28-IV-1963). ¿Pido al Señor que me ayude a mantener o recuperar la alegría cuando noto el peso de las dificultades? ¿He aprendido a sobreponerme al espontáneo sentimiento inicial de rechazo ante el sufrimiento?",
          "Al ocuparse en su trabajo los hijos de Dios en el Opus Dei, procuran no limitarse a cumplir, sino que se esfuerzan en amar, que es siempre excederse gustosamente en el deber y en el sacrificio (Instrucción, mayo 1935/14-IX-1950, n. 59). ¿Encuentro en mi trabajo diario una ocasión para amar y servir a los demás con alegría?",
          "Quédate con nosotros, porque nos rodean en el alma las tinieblas, y solo Tú eres luz, solo Tú puedes calmar esta ansia que nos consume (Amigos de Dios, n. 314). ¿Estoy convencido de que el Señor camina siempre conmigo y le busco enseguida cuando pierdo la claridad en mi vida interior? ¿Le pido también que, junto a Él, me ayude a ser luz para los demás?",
          "«Vino Jesús, se presentó en medio de ellos y les dijo: –La paz esté con vosotros. (…) Al ver al Señor, los discípulos se alegraron» (Jn 20,19-20). ¿Descubro a Jesús en medio de mis quehaceres diarios, y dejo que me inunde su gozo y su paz? ¿Transmito a mis hermanos la serenidad de quien se sabe acompañado constantemente por el Señor?",
          "«Por Cristo, con él y en él…» (Canon Romano). ¿Acudo a la Santa Misa con el deseo de unir toda mi vida al sacrificio de Jesús? ¿Me doy cuenta de que así me uno a su misión de salvar a la humanidad de todos los tiempos?",
          "«Esto es mi cuerpo, que se entrega por vosotros; haced esto en memoria mía» (Lc 22,19). ¿Encuentro en el sacrificio eucarístico la fuente que renueva mi entrega diaria? ¿Le pido al Señor que me enseñe a darme a los demás, como Él se entrega por mí?",
          "Para mí, la primera devoción mariana –me gusta verlo así– es la Santa Misa (Artículo La Virgen del Pilar en “Libro de Aragón”, 1976, p. 31). ¿De qué modos procuro vivir la Misa de la mano de santa María? ¿Acudo a Ella para que me ayude a recibir a su Hijo con su misma pureza, humildad y devoción?"
        ]
      }
    },
    5: {
      impar: {
        titulo: "Años impares — «Domina, ut sit!»",
        preguntas: [
          "Muchos cristianos se dirigen a Nuestra Señora como la Stella maris, la estrella que orienta nuestro rumbo para llegar a Dios. ¿Cuido mis normas marianas a lo largo del día con la convicción de que la Virgen me ayudará a encontrar al Señor en todo lo que hago?",
          "En las Preces pedimos a la Virgen ut loquaris pro nobis bona, que hable bien de nosotros ante Dios. ¿Confío en que Ella cumple este encargo con la ternura de una madre? ¿Realizo mis actividades –trabajo, labor apostólica, vida en familia, etc.– con la seguridad que me da su intercesión constante por mí?",
          "«No tienen vino» (Jn 2,3). ¿Percibo que mi Madre está pendiente de todo lo que necesito, incluso antes de que yo me dé cuenta?",
          "María, Maestra de oración. –Mira cómo pide a su Hijo, en Caná. Y cómo insiste, sin desanimarse, con perseverancia. –Y cómo logra. (Camino, 502). Ayudado por la Virgen, ¿sé insistir en mi oración, confiado en que Dios no me va a negar nada que sea para bien?",
          "«El Espíritu Santo descenderá sobre ti, y el poder del Altísimo te cubrirá con su sombra» (Lc 1,35). ¿Procuro moverme habitualmente bajo la sombra del Espíritu Santo, y dejo que Él gobierne mi vida? ¿Permito que me cambie los planes y soy flexible cuando hace falta, imitando así la disponibilidad de mi Madre?",
          "El corazón de la Virgen volvía una y otra vez a la vida de su Hijo (cfr. Lc 2,19.51). ¿Deseo que Jesús llene cada vez más mi corazón? ¿Le entrego mis sentimientos, le pido que me enseñe a querer y corto con los afectos en los que Él no puede estar?",
          "Cuéntale todo lo que te pasa, hónrala, quiérela. (...) Te aseguro que, si emprendes este camino, encontrarás enseguida todo el amor de Cristo (Amigos de Dios, n. 293). ¿Tengo iniciativa y audacia para manifestar a la Señora mi amor y mi entrega? ¿Cómo podría involucrarla más en mi trabajo y en mi servicio a los demás, metiéndola en todo y para todo?",
          "«María se levantó y marchó deprisa a la montaña» (Lc 1,39) ¿Me adelanto a servir a quienes me rodean? ¿Me siento privilegiado de poder prestar pequeños servicios a mis hermanos en la vida de familia?",
          "¿Con qué detalles procuro crear a mi alrededor un ambiente sereno, acogedor y alegre para que todos tengan un hambre santa de llegar a casa, después de la jornada de trabajo (Instrucción, 31-V-1936, n. 81, nt 114)?",
          "No basta saber que Ella es Madre, considerarla de este modo, hablar así de Ella. Es tu Madre y tú eres su hijo; te quiere como si fueras el hijo único suyo en este mundo (Amigos de Dios, n. 293). ¿Procuro tratar a María con la confianza de un hijo pequeño? ¿Le pido que aumente en mí la convicción de que me quiere como a un hijo único?"
        ]
      },
      par: {
        titulo: "Años pares — «No hable: óigale»",
        preguntas: [
          "«Todos ellos perseveraban unánimes en la oración, junto con algunas mujeres y con María, la madre de Jesús, y sus hermanos» (Hch 1,14). ¿Acudo a nuestra Madre para que me enseñe a rezar con fe y audacia?",
          "Al Divino Consolador le pedimos el don de piedad, que nos dé el sentido de nuestra filiación divina, la conciencia gozosa y sobrenatural de ser hijos de Dios y, en Jesucristo, hermanos de todos los hombres (Consagración del Opus Dei al Espíritu Santo). ¿Le pido al Espíritu Santo que inflame mi corazón con ese mismo amor que me llevará a unirme a la voluntad del Padre?",
          "¡Ven, oh Santo Espíritu!: ilumina mi entendimiento, para conocer tus mandatos (Oración, abril 1934). ¿Agradezco y atesoro las luces que el Espíritu Santo me envía en la oración, en los medios de formación y a través de las personas con las que convivo? ¿Sé acudir a esas luces en mis ratos de oración y en los días de retiro?",
          "¡No sabré hacerlo!, pensabas. –Óyele, te insisto. Él te dará fuerzas, Él lo hará todo, si tú quieres..., ¡que sí quieres! (Forja, n. 403). ¿Rezo con confianza al Paráclito para que me envíe su gracia ante los retos que encuentro en mi vida de entrega? ¿Me apoyo en su fuerza para lanzarme sin miedo hacia metas altas en mi trato con Dios y mi misión apostólica?",
          "«Colmad mi gozo con vuestro mismo sentir, con vuestra misma caridad y concordia y con vuestros mismos anhelos» (Flp 2,2), pedía san Pablo a los primeros cristianos. ¿De qué manera podría seguir contribuyendo a que en la Obra se viva esta misma unidad de afectos e intenciones? ¿Procuro comprender a los demás de mi centro, compartir sus anhelos y rechazar lo que pueda separarme de ellos?",
          "«Y de repente sobrevino del cielo un ruido, como de un viento que irrumpe impetuosamente, y llenó toda la casa en la que se hallaban» (Hch 2,2). ¿Pido al Espíritu Santo que todos en Casa estemos muy encendidos en el amor de Dios? ¿Contagio a mis hermanos, con naturalidad, la ilusión por ser fieles al Señor y cumplir la misión que nos ha encomendado?",
          "Al atender a mis hermanos, ¿ruego al Espíritu Santo que me conceda el don de consejo para que juzgando bien sobre lo que es la voluntad de Dios en cada momento y para cada uno (Consagración del Opus Dei al Espíritu Santo) sepa acertar en mis comentarios? ¿Cuento con la delicadeza de la Virgen para acertar con cada uno?",
          "Jesús ha mantenido sus promesas: ha resucitado, ha subido a los cielos y, en unión con el Eterno Padre, nos envía el Espíritu Santo para que nos santifique y nos dé la vida (Es Cristo que pasa, n. 128). ¿Me sé acompañado a toda hora por el Espíritu Santo en mi misión de llevar la alegría y el Amor de Dios a mis hermanos, amigos y familiares?",
          "Cristo. María. El Papa. ¿No acabamos de indicar, en tres palabras, los amores que compendian toda la fe católica? (Instrucción, 19-III-1934, n. 31). ¿Me lleva el amor a Cristo a rezar por el Papa, a ser altavoz de sus enseñanzas y a fomentar activamente mi cariño hacia su persona? ¿Acudo a la Virgen para que cuide de él y de todos los pastores de la Iglesia?",
          "«Que todos sean uno, como tú, Padre, en mí, y yo en ti, que ellos también sean uno en nosotros» (Jn 17,21). ¿Vivo como propias las necesidades, esperanzas y dificultades de toda la Iglesia? ¿Rezo por los cristianos de todo el mundo, especialmente por los perseguidos?"
        ]
      }
    },
    6: {
      impar: {
        titulo: "Años impares — «El Corazón de Cristo, fuente de infinitos tesoros de amor»",
        preguntas: [
          "El Corazón de Jesús rebosa de amor a su Padre, a mí... y a cada persona. ¿Trato de meterme ahí en mi oración, especialmente cuando noto que se enfría mi vida de entrega a Dios y a los demás?",
          "Cor Iesu Sacratissimum et Misericors, dona nobis pacem (Corazón Sacratísimo y Misericordioso de Jesús, concédenos la paz). ¿Me refugio en la Misericordia de Dios cuando percibo que estoy perdiendo la paz? ¿Encuentro en mis ratos de oración la fuente de la serenidad que busca mi alma?",
          "«Aprended de mí que soy manso y humilde de corazón» (Mt 11,29). ¿Fomento en mi alma los deseos de empaparme de la mansedumbre y humildad de Cristo? ¿Cómo reacciono ante el sufrimiento, ante el dolor? ¿Considero que me une al corazón de Cristo, que sufre por amor y que puedo consolarle?",
          "Que yo vea con tus ojos, Cristo mío, Jesús de mi alma (Notas de una tertulia, 19-III-1975). ¿Me ilusiona poder mirar a los demás con los ojos de Jesús? ¿Lo trato de hacer en mi oración? ¿Le pido tener sus mismos sentimientos?",
          "Los frutos del Espíritu Santo son, entre otros, el amor, la paciencia, la benignidad, la mansedumbre (cfr. Gal 5,22-23). ¿Cuento con ellos para superar antipatías, rarezas y manías que pueden introducirse en mi carácter sin apenas ser consciente? ¿Dejo que los demás me ayuden a mejorar en este aspecto?",
          "No he necesitado aprender a perdonar porque el Señor me ha enseñado a querer (Surco, 804). ¿Ruego a Dios esta gracia, cuando me distancio de otra persona porque no me he sentido bien tratado? ¿Procuro no dar excesiva importancia a los defectos de los demás?",
          "«Si nos amamos unos a otros, Dios permanece en nosotros, y su amor alcanza en nosotros su perfección» (1 Jn 4, 12) ¿Trato de ayudar a los demás con mi oración y con palabras de aliento? Cuando es oportuno hacer la corrección fraterna, ¿la acompaño con oración y cariño?",
          "San Josemaría nos decía a sus hijos que nos quería con corazón de padre y de madre (Carta 6-V-1945, n. 23). ¿Me siento arropado por su cariño e intercesión mientras me empeño por recorrer fielmente el camino que nos abrió en la tierra?",
          "¿Me ilusiona conocer bien la vida de nuestro Padre y sus escritos, para continuar en mi ambiente y época la misión que el Señor le encomendó? ¿Está la Obra en el centro de mi corazón, como lo estaba en el de san Josemaría?",
          "San Josemaría se ponía como ejemplo de hombre que sabe querer (Notas de una tertulia, 6-X-1968). ¿Pido a Dios la gracia de que mis hermanos encuentren en mí ese mismo cariño?"
        ]
      },
      par: {
        titulo: "Años pares — «Se reitera la infinita locura divina, dictada por el Amor»",
        preguntas: [
          "Jesús instituye la Eucaristía para que podamos tenerle siempre cerca (Es Cristo que pasa, n. 84). ¿Agradezco al Señor que se haya querido quedar en el sagrario de mi centro y de tantas iglesias del mundo? ¿Correspondo a su cercanía poniendo cariño en mis normas de piedad eucarísticas?",
          "Para mí el Sagrario ha sido siempre Betania, el lugar tranquilo y apacible donde está Cristo, donde podemos contarle nuestras preocupaciones, nuestros sufrimientos, nuestras ilusiones y nuestras alegrías, con la misma sencillez y naturalidad con que le hablaban aquellos amigos suyos, Marta, María y Lázaro (Es Cristo que pasa, n. 154). ¿Me doy cuenta de que Jesús espera que le abra mi alma cada día y disfruta especialmente en ese rato de compañía? ¿Cómo me preparo para los encuentros con Él en la oración?",
          "«Como el Padre que vive me ha enviado, y yo vivo por el Padre, así, del mismo modo, el que me come vivirá por mí» (Jn 6,57). ¿Recibo la Comunión con el deseo de dejar que el Señor se haga dueño de mi vida? ¿Aprovecho ese momento de intimidad con Dios para renovar mi entrega y decir que sí a aquello que me pide?",
          "«Pues si vosotros, aun siendo malos, sabéis dar cosas buenas a vuestros hijos, ¡cuánto más vuestro Padre que está en los cielos dará cosas buenas a los que le piden!» (Mt 7,11). ¿Estoy convencido de que, unido a Cristo, Dios Padre me escucha de manera especial durante la Santa Misa? ¿Pongo en la patena a las personas que me rodean, los proyectos que tengo entre manos, etc.?",
          "¿Realizo mi trabajo diario con la ilusión de preparar una ofrenda agradable para el Señor, que se unirá a su sacrificio durante la Santa Misa? ¿Me lleva esto a cuidar las cosas pequeñas?",
          "«Tomad, comed… Bebed todos porque esta es mi sangre de la alianza, que es derramada por muchos para el perdón de los pecados» (Mt 26,26-28). ¿Deseo hacer partícipes a muchas personas de los frutos de esta entrega sin medida de Jesús? ¿Cómo podría ayudar a mis amigos a vivir mejor la Santa Misa?",
          "San Josemaría nos rogaba: Al Padre, sea quien sea, amadlo mucho, mucho (citado en Crónica, 1976). ¿Procuro cuidar al Padre con mi cariño, mi oración y mi mortificación? ¿Hago lo mismo con quienes hacen cabeza, sabiendo que representan al Padre?",
          "¿Me apoyo en nuestro Padre para saber atender a mis hermanos como él lo haría? ¿Le pido que me conceda su cariño, su comprensión y su fortaleza?",
          "Contemplo la Obra como el Señor la quiso y es preciso esperar; la veo proyectada en el tiempo –¡siglos!– y hacer en la historia de la humanidad –humilde y silenciosamente– un surco hondo y ancho, luminoso y fecundo, sirviendo a la Santa Iglesia de Dios (Instrucción, mayo 1935/14-IX-1950, n. 172). ¿Miro con esa misma fe la labor de la Obra? ¿Hay algún aspecto de nuestro espíritu con el que me podría identificar un poco más?",
          "Filialmente pegados a la Madre de Dios, no nos ha faltado nunca su sonrisa en los momentos difíciles. Siempre seguros, si ponéis de vuestra parte un poquito de buena voluntad (Mientras nos hablaba en el camino, p. 123). ¿Confío en que la Virgen vela por la santidad de todos en Casa y acudo a su intercesión por mis hermanos?"
        ]
      }
    },
    7: {
      impar: {
        titulo: "Años impares — «Para acoger la semilla de Dios»",
        preguntas: [
          "«El Reino de Dios viene a ser como un hombre que echa la semilla sobre la tierra, y, duerma o vele noche y día, la semilla nace y crece, sin que él sepa cómo» (Mc 4,26-27). ¿Confío en la fuerza de la semilla que el Señor ha dejado en mi alma? ¿Soy paciente conmigo mismo y con los demás mientras nos esforzamos por corresponder al Señor?",
          "¿Deseo ser esa tierra buena que se deja transformar por la Palabra de Dios? ¿Soy sensible a las inspiraciones del Espíritu Santo? ¿Procuro, con su ayuda, vigilar sobre mi corazón, especialmente a través de los momentos de examen de conciencia?",
          "«Mis elegidos (...) no se fatigarán en vano» (Is 65,22-23). ¿Vivo con la seguridad de que el Señor puede remover hasta los obstáculos más grandes y trato de ayudar a las almas aun en las situaciones más complejas?",
          "Ante las dificultades, ¿procuro recordar con san Pablo que «todas las cosas cooperan para el bien de los que aman a Dios, de los que son llamados según su designio» (Rm 8,28)? ¿Crezco en el convencimiento de que Dios saca bienes de los males, incluso de los que son causados por el pecado, los míos propios y los ajenos?",
          "«El Espíritu lo sondea todo, incluso lo profundo de Dios» (1Cor 2,10). ¿Dejo el protagonismo al Espíritu Santo en la tarea de acompañar y estimular el crecimiento de la amistad divina en las almas? ¿Acudo a sus luces para saber aconsejar a mis amigos?",
          "Quien desea guiar a la santidad ha de procurar que los consejos que dé sean siempre optimistas, que tengan contenido sobrenatural, (...) incluso que diviertan; que den ánimo (Instrucción, 8-XII-1941, n. 23). ¿Trato a mis amigos como lo haría Jesucristo, arrastrando hacia el amor e infundiendo esperanza? ¿Busco abrirles horizontes en la vida espiritual, rezo por ellos y confío en su libertad?",
          "«He venido a prender fuego a la tierra, ¡y cuánto deseo que ya esté ardiendo!» (Lc 12,49). ¿Me consume el mismo fuego y deseo ir al paso de Dios en el apostolado? ¿Acompaño con ilusión a mis amigos, sin calcular el esfuerzo y sin tomarme vacaciones ni compensaciones?",
          "¿Le pido al Señor comprender el ritmo que cada alma tiene en su camino hacia Él? ¿Soy paciente cuando no veo resultados o me vence a veces el deseo de cosechar ya los frutos?",
          "La templanza no supone limitación, sino grandeza (Amigos de Dios, n. 84). ¿Practico esta virtud con el convencimiento de que me ayudará a ser más libre? ¿Existen momentos en los que me dejo atar por ciertos placeres o caprichos?",
          "¿Me ilusiona difundir a mi alrededor el bonus odor Christi con un estilo de vida alegre y sobrio? ¿Procuro ser ejemplar en el uso moderado de los bienes materiales, de internet y las redes sociales, música, etc.? ¿Aprecio y promuevo las aficiones que enriquecen la cultura y desarrollan la capacidad de contemplar?"
        ]
      },
      par: {
        titulo: "Años pares — «Corresponder a la llamada divina y dar fruto»",
        preguntas: [
          "El apostolado es Amor de Dios que se desborda, dándose a los hombres; y la vida interior contemplativa es clamor de almas (Carta 6-V-1945, n. 40). ¿Deseo enamorarme mucho del Señor para después contagiar este amor a quienes me rodean? ¿Me lleva el afán de almas a cuidar mi trato con Dios?",
          "San Josemaría decía que el cristiano no trata solo de vivir una actitud de amor, sino de dar a conocer el Amor de Dios, a través de ese su amor humano (Es Cristo que pasa, n. 115). ¿Entiendo mi misión apostólica –y mi propia vida– como una manifestación del Amor de Dios? ¿Cómo podría transmitir aún más ese Amor en los medios de formación que imparto?",
          "«Por lo demás, hermanos, orad por nosotros para que la palabra del Señor avance con rapidez» (2 Ts 3,1). ¿Está mi oración llena de la ambición de encender a muchas almas con el fuego del corazón de Cristo?",
          "«Queridos hermanos, amémonos unos a otros, ya que el amor es de Dios, y todo el que ama ha nacido de Dios y conoce a Dios» (1 Jn 4,7). ¿Estoy convencido de que para dar a conocer a Dios tengo que querer sinceramente a los demás? ¿Podría crecer mi cariño hacia las personas que se acercan a nuestra labor apostólica?",
          "Quiere Jesús, Señor Nuestro, que proclamemos hoy en mil lenguas –y con don de lenguas, para que todos sepan aplicárselo a sus propias vidas–, en todos los rincones del mundo, ese mensaje viejo como el Evangelio, y como el Evangelio nuevo (Carta 9-I-1932, n. 91). ¿Acudo al Espíritu Santo mientras preparo los medios de formación, para hacer amable y atractivo el anuncio de Jesucristo? ¿Transmito con mis palabras la perenne novedad del Evangelio?",
          "«A uno le dio cinco talentos, a otro dos y a otro uno solo: a cada uno según su capacidad; y se marchó» (Mt 25, 15) ¿Agradezco al Señor los talentos que me ha regalado y busco maneras creativas de ponerlos al servicio de mi misión apostólica? ¿Me doy cuenta de que este es el mejor modo de llevarlos a plenitud?",
          "«Cinco de ellas eran necias y cinco eran prudentes (...). Las prudentes se llevaron alcuzas de aceite con las lámparas» (Mt 25,2-4). ¿Confío en la fuerza de la gracia al hablar de Dios y preparo las conversaciones con mis amigos con oración y mortificación?",
          "«Aprended a hacer el bien» (Is 1,17). ¿Cómo podría cuidar más mi propia formación, pensando en la ayuda que puedo prestar a muchas almas? ¿Estoy dispuesto a aprender continuamente, con humildad y sencillez?",
          "«La tierra ha dado su fruto, nos bendice el Señor, nuestro Dios» (Sal 67,7). ¿Recuerdo en la labor apostólica que soy un hijo que trabaja en el campo de su Padre? ¿Procuro ser constante y confío en que Él sabe cómo y cuándo bendecirá nuestros esfuerzos?",
          "«Mis elegidos consumirán la obra de sus manos. No se fatigarán en vano (...) porque serán semilla bendita del Señor (...). Antes de que me llamen yo les responderé, aún estarán hablando, y ya los habré escuchado» (Is 65,23-24). ¿Movido por la fe, me crezco ante los obstáculos y busco nuevas formas de ayudar a mis amigos cuando alguno no responde como yo esperaba?"
        ]
      }
    },
    8: {
      impar: {
        titulo: "Años impares — «Vultum tuum Domine requiram!»",
        preguntas: [
          "¿Descubro, en el trabajo y en los distintos momentos del día, la mirada atenta y cariñosa de mi Padre Dios, también en los momentos difíciles cuando me encuentro con la Cruz inesperada, y tal vez por eso más oscura (Via Crucis, V estación)?",
          "«No os dejaré huérfanos, volveré a vosotros» (Jn 14,18). ¿Me ayudan las normas de siempre a descubrir que todo lo mío, hasta lo aparentemente más insignificante, le importa y alegra a mi Padre Dios?",
          "«Y yo le pediré al Padre que os dé otro Paráclito, que esté siempre con vosotros» (Jn 14,16). ¿Le agradezco al Espíritu Santo las luces e impulsos que me ofrece en cada instante de mi jornada? ¿Cómo podría crecer en diligencia para secundarlos?",
          "Hijas e hijos de mi alma: verle, contemplarlo, conversar con Él. (…) Cuando definimos como contemplativa la vocación a la Obra es porque procuramos ver a Dios en todas las cosas de la tierra: en las personas, en los sucesos, en lo que es grande y en lo que parece pequeño, en lo que nos agrada y en lo que se considera doloroso (En diálogo con el Señor, n. 108). ¿Busco hacer realidad este ideal que nos propone san Josemaría en el día a día?",
          "«De ti piensa mi corazón: “Busca su rostro”. Tu rostro, Señor, buscaré» (Sal 27,8). ¿Albergo en mi corazón este mismo deseo cada vez que me recojo para hacer oración? ¿Trato con confianza a Jesús en su Humanidad Santísima, apoyándome especialmente en los evangelios?",
          "«Sacad enseguida la mejor túnica y vestídsela; ponedle un anillo en la mano y sandalias en los pies; traed el ternero cebado» (Lc 15, 22-23). ¿Me llenan los sacramentos de seguridad en la acción de Dios en mi alma y en la de mis hermanos y amigos? ¿Acudo a la confesión sacramental con el deseo de no retrasar el momento de recibir el abrazo de mi Padre Dios?",
          "Queridísimos: Gracia de Dios y buen humor. Esta es la consigna que procuro no perder de vista (Carta a sus hijos del Consejo General, 9-VII-1947). ¿Me doy cuenta de que la gracia de Dios es lo central en mi batalla por alcanzar la santidad, por ejemplo, pidiendo ayuda al Señor para vivir mi examen particular?",
          "Cada generación de cristianos ha de redimir, ha de santificar su propio tiempo: para eso, necesita comprender y compartir las ansias de los otros hombres, sus iguales (Es Cristo que pasa, n. 132). ¿Cómo puedo crecer en mi capacidad de escuchar y hacerme cargo de la situación de mis hermanos, familiares y amigos?",
          "¿Quiero que el Señor me haga un instrumento de su gracia para sanar y curar a muchas personas?",
          "Te aconsejo –para terminar– que hagas, si no lo has hecho todavía, tu experiencia particular del amor materno de María (Amigos de Dios, n. 293). ¿Con la ayuda de María, mi madre, encuentro también en la Cruz, la alegría y la paz que el mundo no puede dar?"
        ]
      },
      par: {
        titulo: "Años pares — «Manifestación de la fuerza de Dios»",
        preguntas: [
          "«Al instante Jesús alargó la mano, lo sujetó y le dijo: –Hombre de poca fe, ¿por qué has dudado?» (Mt 14,31). ¿Descanso en la certeza de la compañía de Cristo? ¿Procuro poner la cabeza y el corazón en Él para no dar demasiadas vueltas a las dificultades?",
          "Señor, Dios mío: en tus manos abandono lo pasado y lo presente y lo futuro, lo pequeño y lo grande, lo poco y lo mucho, lo temporal y lo eterno (Via Crucis, VII estación, n. 3). ¿Abandono en las manos de mi Padre Dios las preocupaciones, y en especial la inquietud de lo que pueda suceder en el futuro, sabiendo que Él lo hará todo antes, más y mejor?",
          "«Llevamos este tesoro en vasos de barro, para que se reconozca que la sobreabundancia del poder es de Dios» (2 Co 4,7). ¿Miro con serenidad mi debilidad y confío en la fortaleza de Dios? ¿Me asusto o pierdo la paz al experimentar mis defectos?",
          "«Aquí hay un muchacho que tiene cinco panes de cebada y dos peces; pero, ¿qué es esto para tantos?» (Jn 6,9). ¿Tengo la confianza de poner en manos de Dios todo lo que tengo, por pequeño que parezca? ¿Evito que la experiencia de mis limitaciones me frene para ser generoso?",
          "«Dadles vosotros de comer» (Mt 14,16), dijo Jesús a sus discípulos antes de multiplicar los panes. ¿Me siento en primera línea en la labor apostólica de la Obra, en cualquier encargo que se me confíe? ¿Conjugo la iniciativa personal con la docilidad a las orientaciones de los directores?",
          "Antes de consagrar el Opus Dei al Inmaculado Corazón de María, san Josemaría escribió: Va a ser una consagración ambiciosa, porque le consagraremos también los pueblos y naciones que están lejos de su Hijo Divino. ¡Bien propio es de nuestro espíritu! Uníos a mí, especialmente en ese día (Carta, 9-VIII-1951). ¿Me llena de alegría el Amor que Dios me ha mostrado al llamarme a su Obra para ser parte de la historia de sus misericordias?",
          "«Y Jesús le dijo: –¡Si puedes...! ¡Todo es posible para el que cree! Enseguida el padre del niño exclamó: –¡Creo, Señor; ayuda mi incredulidad!» (Mc 9, 23-24) ¿Confío en que el Señor puede curar las heridas de mi alma, y se las muestro con humildad y sencillez en mi oración personal? ¿Me dejo ayudar en la dirección espiritual, manifestando sinceramente el estado de mi alma?",
          "Milagros como Cristo, milagros como los primeros Apóstoles haremos. Quizá en ti mismo, en mí se han operado esos prodigios: quizá éramos ciegos, o sordos, o lisiados, o hedíamos a muerto, y la palabra del Señor nos ha levantado de nuestra postración (Amigos de Dios, n. 262). ¿Suelo hacer memoria de las veces que Cristo me ha devuelto a la vida y estoy convencido de que Él puede hacer lo mismo en todas las almas?",
          "«Su hermano Lázaro había caído enfermo. Entonces las hermanas le enviaron este recado: –Señor, mira, aquel a quien amas está enfermo» (Jn 11,2-3). ¿Pido a Jesús con esta confianza por las personas que están pasando por un mal momento en su vida espiritual o personal?",
          "Te consagramos nuestro ser y nuestra vida; todo lo nuestro lo que amamos y somos. Para ti nuestros cuerpos, nuestros corazones y nuestras almas; tuyos somos (Consagración del Opus Dei al Corazón Dulcísimo de María). ¿Deseo servir a las almas haciendo la Obra donde Dios quiere, con el convencimiento de que ahí es donde daré más fruto?"
        ]
      }
    }
  };

  function crearLista(preguntas) {
    var ol = document.createElement("ol");
    preguntas.forEach(function (texto) {
      var li = document.createElement("li");
      li.textContent = texto;
      ol.appendChild(li);
    });
    return ol;
  }

  function renderizar() {
    var summary = document.getElementById("examen-mes-titulo");
    var contenido = document.getElementById("examen-mes-contenido");
    if (!summary || !contenido) return;

    var ahora = window.CMP_RETIRO_PROXIMO || new Date();
    var mes = ahora.getMonth() + 1;
    var paridad = (ahora.getFullYear() % 2 === 0) ? "par" : "impar";
    var nombreMes = NOMBRES_MES[mes];
    var datos = EXAMENES[mes] && EXAMENES[mes][paridad];

    contenido.textContent = "";
    if (!datos) {
      summary.textContent = "Examen de " + nombreMes;
      var p = document.createElement("p");
      p.textContent = "No hay texto de examen guardado para " + nombreMes + ".";
      contenido.appendChild(p);
      return;
    }

    summary.textContent = "Examen de " + nombreMes + " — " + datos.titulo;
    contenido.appendChild(crearLista(datos.preguntas));
  }

  function renderizarTodos() {
    var cont = document.getElementById("examenes-todos");
    if (!cont) return;

    ORDEN_CURSO.forEach(function (mes) {
      var seccion = document.createElement("div");
      seccion.className = "seccion";
      var h2 = document.createElement("h2");
      h2.textContent = NOMBRES_MES[mes].charAt(0).toUpperCase() + NOMBRES_MES[mes].slice(1);
      seccion.appendChild(h2);

      ["impar", "par"].forEach(function (paridad) {
        var datos = EXAMENES[mes][paridad];
        var details = document.createElement("details");
        var summary = document.createElement("summary");
        summary.textContent = datos.titulo;
        details.appendChild(summary);
        details.appendChild(crearLista(datos.preguntas));
        seccion.appendChild(details);
      });

      cont.appendChild(seccion);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderizar();
    renderizarTodos();
  });
})();
