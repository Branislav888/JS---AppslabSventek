class Monitor {
    constructor(brand, size, display, ports, color) {
        this.brand = brand;
        this.size = size;
        this.display = display;
        this.ports = ports;
        this.color = color;
    }

    greet() {
        console.log("This monitor is a " + this.brand + " and its size is " + this.size + " and " + this.display + " with " + this.ports + " port in " + this.color + " color");
    }
}

const monitor = new Monitor("Samsung", "27inch", "4K", "HDMI", "Black");
monitor.greet();

const monitor2 = new Monitor("LG", "24inch", "LED", "USB-C", "White");
monitor2.greet();

const monitor3 = new Monitor("Sony", "32inch", "8K", "DisplayPort", "Grey");
monitor3.greet();