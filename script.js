// ==========================================
// KONFIGURASI SUPABASE
// ==========================================

const SUPABASE_URL = "https://bvqokvxavsdelkqnnwuj.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_9fn_85aEwRz2Ijk_eI04OQ_fyN7h4xc";


// Membuat koneksi ke Supabase
const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);


// ==========================================
// ELEMENT HTML
// ==========================================

const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");


// ==========================================
// PROSES LOGIN
// ==========================================

loginForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    const username =
        document.getElementById("username").value.trim();

    const password =
        document.getElementById("password").value;


    // Tampilkan status
    message.textContent = "Sedang login...";


    try {

        /*
         * Untuk tahap awal:
         * username kita isi dengan EMAIL Auth.
         *
         * Nanti akan kita ubah menjadi:
         *
         * username → cari akun → login
         */

        const { data, error } =
            await supabaseClient.auth.signInWithPassword({

                email: username,

                password: password

            });


        // Jika Supabase mengembalikan error
        if (error) {

            throw error;

        }


        // Login berhasil
        message.textContent =
            "Login berhasil!";


        console.log(
            "User berhasil login:",
            data.user
        );


    } catch (error) {

        console.error(
            "Login error:",
            error
        );


        message.textContent =
            "Login gagal: " + error.message;

    }

});
