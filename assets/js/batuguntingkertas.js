// Inisialisasi poin
let playerScore = 0;
let computerScore = 0;

// Fungsi untuk menghasilkan pilihan acak komputer
function computerPlay() {
    const choices = ["batu", "gunting", "kertas"];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

// Fungsi untuk menentukan pemenang dari setiap putaran
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Seri!";
    } else if (playerSelection === "batu" && computerSelection === "gunting" ||
               playerSelection === "gunting" && computerSelection === "kertas" ||
               playerSelection === "kertas" && computerSelection === "batu") {
        playerScore++;
        return "Kamu menang! " + playerSelection + " mengalahkan " + computerSelection;
    } else {
        computerScore++;
        return "Kamu kalah! " + computerSelection + " mengalahkan " + playerSelection;
    }
}

// Fungsi untuk menjalankan game
function game() {
    // Mengulang permainan sebanyak 5 kali
    for (let i = 0; i < 5; i++) {
        // Menanyakan pilihan pemain
        const playerSelection = prompt("Pilih batu, gunting, atau kertas").toLowerCase();
        // Memeriksa apakah pilihan pemain valid
        if (playerSelection !== "batu" && playerSelection !== "gunting" && playerSelection !== "kertas") {
            alert("Pilihan tidak valid!");
            i--;
            continue;
        }
        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection);
        alert(result);
    }
    // Menampilkan poin akhir
    alert("Skor akhir: Kamu " + playerScore + " - " + computerScore + " Komputer");
    // Mereset poin
    playerScore = 0;
    computerScore = 0;
}