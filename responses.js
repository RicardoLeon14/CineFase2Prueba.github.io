function getBotResponse(input) {
    // Convertir la entrada a minúsculas para hacer comparaciones sin distinción entre mayúsculas y minúsculas
    var lowerInput = input.toLowerCase();

    // Simple responses
    if (lowerInput === "hola") {
        return "Hola. Bienvenid@ a MOVIECITY! ¿En qué te puedo ayudar el día de hoy?<br>" +
            "1. PELICULAS EN CARTELETA🎞️⭐<br>" +
            "2. CONSULTAR HORARIOS⏲️<br>" +
            "3. COMPRA DE BOLETOS🎟️<br>";

    } else if (lowerInput === "hasta luego") {
        return "Gracias, esperamos que nos vuelvas a visitar";

    }  else if (lowerInput === "1") {
        return "Actualmente, tenemos las siguientes películas en cartelera:<br>" +
            "Avatar<br>" +
            "Mario Bros.<br>" +
            "Rapidos y Furiosos<br>" +
            "Troll's<br>" +
            "The Marvel's<br>" ;

    } else if (lowerInput === "2") {
        return "Puedo proporcionarte información sobre los horarios de las películas:<br>" +
            "🌞Matutino: 10:00 AM<br>" +
            "🌇Vespertino: 3:00 PM<br>" +
            "🌚Nocturno: 8:00 PM<br>" +
            "¿Tienes una película en mente o prefieres ver todas las opciones?";

    } else if (lowerInput === "3") {
        return "Puedes comprar tus boletos fácilmente a través de nuestro sitio web.";
    } else {
        return "En caso de que desees hacernos otras consultas, puedes contactarnos vía WhatsApp:\n" +
            "<a href='https://wa.me/923459861?text=Comunicate%20con%20MovieCity%20estamos%20para%20servirte' target='_blank'>https://api.whatsapp.com/send?phone=950733458</a>";
    }
}