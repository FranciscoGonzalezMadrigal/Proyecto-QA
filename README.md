# Audiophistic :musical_note:

Nos ha tocado realizarle cambios/mejoras al proyecto de **Audiophistic** los cuales el equipo de trabajo ha decidido que serán las siguientes:

1. Agregar la verificación de una contraseña “fuerte”. Por ejemplo, cuando un usuario desea registrarse la plataforma le solicita que la contraseña tenga mayúsculas, minúsculas, signos especiales, entre otros.

    ### Mejora ya efectuada :top:

 - Puede encontrar esta mejora en **app/component/gestion-acceso/registro** y también en **app/component/perfil/editar-perfil**, cada uno en sus respectivos archivos **.html** y **.component.ts**

<br>
<br>

2. El manejo de datos de las trasacciones deben de ir cifrados.
    - Leonardo realiza una compra en el sitio y su información, antes de ser enviada a la base de datos, se cifra. Cuando Leonardo consulte por información sobre su compra esta, despues de ser recibida por la base de datos, se decifra para el usuario 
 
