# Click and Drag to Scroll
> JS exercise given at HEPL

* * *

**js-tp-click-and-drag-to-scroll** is an educational project, which will be used for `JS` courses.

**Note:** the school where the course is given, the [HEPL](http://www.provincedeliege.be/hauteecole) from Liège, Belgium, is a french-speaking school. From this point, the instruction will be in french. Sorry.

* * *

> Lors de vos cours de *web*, vous allez découvrir le langage *JavaScript* et le mettre en pratique pour apprendre à rendre vos pages web interactives.  

* * *
Dans le cadre de cet exercice nous vous demandons de permettre à l'utilisateur de se déplacer dans le slider à l'aide de sa souri en faisan du drag, (maintenir le clic enfoncé et se délacer). Nous retiendrons qu’il s’agit ici d’un exemple scolaire puisqu’en temps normal l’utilisateur doit pouvoir utiliser le site internet intégralement au clavier. Il serait donc nécessaire de prévoir des alternatives au clavier.



![](./readme.gif)



## Énoncé

1. Écouter l'événement clique.
   1. Ensuite, observez le déplacement horizontal en vue d’appliquer par JavaScript un scroll horizontal à l'élément `.items`.
   2. Dès que l’événement `mouseup` ou `mouseleave` survient, vous devez arrêter ce déplacement.



## Aides

* [mouseup](https://developer.mozilla.org/fr/docs/Web/API/Element/mouseup_event)
* [mouseleave](https://developer.mozilla.org/fr/docs/Web/API/Element/mouseleave_event)
* [scrollLeft](https://developer.mozilla.org/fr/docs/Web/API/Element/scrollLeft)
* [MouseEvent.pageX](https://developer.mozilla.org/fr/docs/Web/API/MouseEvent/pageX)
* [element.offsetLeft](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement/offsetLeft)



Avant de commencer l'exercice, posez-vous afin de comprendre et surtout décomposer le mouvement de drag que l'on pourrait voir comme suit. 

1. [mousedown](https://developer.mozilla.org/fr/docs/Web/API/Element/mousedown_event)
2. [mousemove](https://developer.mozilla.org/fr/docs/Web/API/Element/mousemove_event)
3. [mouseup](https://developer.mozilla.org/fr/docs/Web/API/Element/mouseup_event) ou [mouseleave](https://developer.mozilla.org/fr/docs/Web/API/Element/mouseleave_event)

Vous devrez aussi opter pour une stratégie afin de calculer le déplacement horizontal lors du drag. Car c'est ce nombre qui vous indique de combien de pixels, vous devez déplacer le slider. Vous pourriez déterminer une origine. Donc un point d’ancrage ( obtenu au premier clic ) que vous pouvez comparer avec les nouvelles coordonnées obtenues pendant le déplacement (mousemove). Notez que ce nombre peut être multiplié afin d’amplifier l’effet de déplacement du slider.

## Source

[JavaScript30](https://javascript30.com) de [Wes Bos](https://wesbos.com)



