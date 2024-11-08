class Notebook {
    constructor(name, k, N) {
        if (name !== "" && k > 0 && N>0) {
            this.name = name;
            this.k = k;
            this.N = N;
        } else {
            this.name = "line";
            this.k = 18;
            this.N = 10;
        }
    }

    cost() {
        let n;
        if (this.name === "line") {
            n = 0.2;
        } else if (this.name === "cell") {
            n = 0.3;
        } else if (this.name === "oblique") {
            n = 0.23;
        } else {
            n = 0.15;
        }

        return this.k * n * this.N;
    }
}

class NotebookCover extends Notebook {
    constructor(name, k, material, N) {
        super(name, k, N);
        if (material !== "") {
            this.material = material;
        } else {
            this.material = "cardboard";
        }
    }

    cost() {
        let n;
        if (this.name === "line") {
            n = 0.2;
        } else if (this.name === "cell") {
            n = 0.3;
        } else if (this.name === "oblique") {
            n = 0.23;
        } else {
            n = 0.15;
        }

        let m;
        if (this.material === "cardboard") {
            m = 0.6;
        } else if (this.material === "leather") {
            m = 1.3;
        } else if (this.material === "fabric") {
            m = 0.8;
        } else {
            m = 0.5;
        }

        return ((this.k * n + m) * this.N);
    }
}

function show(message, id, res) {
    document.getElementById(id).innerHTML = message + " " + res.toFixed(2) + " $";
}

function Notebook_ras() {
    let name = document.getElementById("name").value;
    let k = parseFloat(document.getElementById("k").value);
    let N = parseFloat(document.getElementById("N").value);
    let name1 = document.getElementById("name1").value;
    let k1 = parseFloat(document.getElementById("k1").value);
    let material = document.getElementById("material").value;
    let N1 = parseFloat(document.getElementById("N1").value);

    let noteBook = new Notebook(name, k, N);
    let noteBookCover = new NotebookCover(name1, k1, material, N1);

    show("Вартість зошитів: ", "resultNotebook", noteBook.cost());
    show("Вартість зошитів з обкладинкою: ", "resultNotebookCover", noteBookCover.cost());
}

document.getElementById('check_Notebook_Button').addEventListener('click', Notebook_ras);