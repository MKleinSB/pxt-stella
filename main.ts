let Stellastrip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)

//% color=#5882FA icon="\uf005"
namespace Stella {

    //% block="zeige Farbe an Pixel $color1 $color2 $color3 $color4 $color5"
    //% color1.shadow="colorNumberPicker"  color1.defl=0xff0000
    //% color2.shadow="colorNumberPicker"  color2.defl=0x00ff00
    //% color3.shadow="colorNumberPicker"  color3.defl=0xffff00
    //% color4.shadow="colorNumberPicker"  color4.defl=0x0000ff
    //% color5.shadow="colorNumberPicker"  color5.defl=0x000000
    //% inlineInputMode=inline

    export function showColorpixel(color1: number, color2: number, color3: number, color4: number, color5: number) {
        Stellastrip.setPixelColor(0, color1)
        Stellastrip.setPixelColor(1, color2)
        Stellastrip.setPixelColor(2, color3)
        Stellastrip.setPixelColor(3, color4)
        Stellastrip.setPixelColor(4, color5)
        Stellastrip.show()
    }

    /**
    * Färbt alle LEDs in einer Farbe. 
    * Schwarz schaltet alle LEDs aus
    */
    //% block="zeige Farbe $color"
    //% color.shadow="colorNumberPicker"

    export function showStellaColor(color: number) {
        Stellastrip.showColor(color)
    }

    /**
    * Konvertiert den Farbnamen in eine Zahl
    */
    //% blockId=StellaColor block="%c"
    export function StellaColor(c: NeoPixelColors): number {
        return c;
    }
    /**
    * Konvertiert Rot-, Grün- und Blauanteil in eine RGB Farbe
    */
    //% blockId="Stellaneopixel_rgb" block="Rot %red|Grün %green|Blau %blue"
    export function rgb(red: number, green: number, blue: number): number {
        return ((red & 0xFF) << 16) | ((green & 0xFF) << 8) | (blue & 0xFF);
    }

    /**
    * Lässt die LEDs in Regenbogenfarben leuchten
    */
    //% blockId=Stellarainbow block="zeige Regenbogen"
    export function Regenbogen() {
        Stellastrip.showRainbow(1, 300);
        Stellastrip.show()
    }

    /**
      * Lässt die LEDs nach eine Stelle nach rechts rotieren
      */
    //% blockId=Stellarotate block="Farben rotieren"
    export function Stellarotate() {
        Stellastrip.rotate()
        Stellastrip.show()
    }


    /**
     * Zeigt ein Balkendiagramm basierend auf `wert` und `max`.
     * Wenn `max` 0 ist, wird der Balken automatisch angepasst.
     * @param wert aktueller zu zeichnender Wert
     * @param max Maximalwert, z.B.: 255
     */
    //% blockId=stella_show_bar_graph block="zeige Balkendiagramm von %wert|bis %max"

    export function showStellaBarGraph(wert: number, max: number) {
        Stellastrip.showBarGraph(wert, max)
    }
}