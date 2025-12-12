// Exercice 1
export function wait() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const msg = "Executed after 2 seconds";
            console.log(msg);
            resolve(msg);
        }, 2000);
    });
}

// Exercice 2
export async function fetchUser(id) {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
    );
    if (!response.ok) {
        throw new Error(`Erreur API: ${response.status}`);
    }
    return response.json();
}