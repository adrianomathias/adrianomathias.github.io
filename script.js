const input = document.getElementById("user-command");
const output = document.getElementById("terminal-output");

input.addEventListener("keydown", function(e) {

    if (e.key === "Enter") {

        let command = input.value.toLowerCase()

        output.innerHTML += `<p>visitor@portfolio:~$ ${command}</p>`

        const executeCmd = cmd => {

            if(cmd === "help"){
                output.innerHTML += "<br>" 
                output.innerHTML += "<p>Available commands:</p>"
                output.innerHTML += "<p>Adriano Mathias skills - show my skills.</p>"
                output.innerHTML += "<p>themes - show available themes.</p>"
                output.innerHTML += "<p>clear - clear the terminal.</p>"
                output.innerHTML += "<br>"
            }

            if(cmd === "clear"){
                output.innerHTML = ""
            }

            if(cmd === "adriano mathias skills"){
                output.innerHTML += "<p>My skills: </p>"
                output.innerHTML += "<br>"
                output.innerHTML += "<p>Java █████████</p>"
                output.innerHTML += "<p>JavaScript █████████</p>"
                output.innerHTML += "<p>HTML 5 █████████</p>"
                output.innerHTML += "<p>CSS 3 █████████</p>"
                output.innerHTML += "<p>Bootstrap █████████</p>"
                output.innerHTML += "<p>A.I. █████████</p>"
                output.innerHTML += "<p>Git & GitHub █████████</p>"
                output.innerHTML += "<p>Python █████████</p>"
            }

            if(cmd === "themes"){
                output.innerHTML += "<br>"
                output.innerHTML += "<p>gray - sets the main theme to 'gray' (default theme).</p>"
                output.innerHTML += "<p>orange - sets the main theme to 'orange'.</p>"
                output.innerHTML += "<p>purple - sets the main theme to 'purple'.</p>"
                output.innerHTML += "<p>blue - sets the main theme to 'blue'.</p>"
                output.innerHTML += "<p>yellow - sets the main theme to 'yellow'.</p>"
                output.innerHTML += "<p>green - sets the main theme to 'green'.</p>"
                output.innerHTML += "<p>cyberpunk - sets the main theme to 'cyberpunk theme'.</p>"
                output.innerHTML += "<p>matrix - sets the main theme to 'matrix theme'.</p>"
                output.innerHTML += "<p>ocean - sets the main theme to 'ocean theme'.</p>"
                output.innerHTML += "<br>"
            }

            const root = document.documentElement
            
            const removeMatrix = () => {
                const canvas = document.getElementById('matrix-canvas')
                if(canvas) canvas.remove()
                if(window.matrixInterval) clearInterval(window.matrixInterval)
            };

            const setTheme = (bgBody, bgNav, text, secText, border, term) => {
                removeMatrix();
                root.style.setProperty('--background-color-body', bgBody)
                root.style.setProperty('--background-color-nav', bgNav)
                root.style.setProperty('--text-color', text)
                root.style.setProperty('--secondary-text-color', secText)
                root.style.setProperty('--border-card-color', border)
                root.style.setProperty('--background-color-terminal', term)
            };

            const defaultBgBody = '#0a0a0a'
            const defaultBgNav = '#1a1a1a'
            const defaultText = '#eee'
            const defaultTerm = 'black'

            if(cmd === "gray") {
                setTheme(defaultBgBody, defaultBgNav, defaultText, 'rgb(132, 132, 132)', '#eee', defaultTerm)
            }
            if(cmd === "orange") {
                setTheme(defaultBgBody, defaultBgNav, defaultText, '#ffa500', '#ffa500', defaultTerm)
            }
            if(cmd === "purple") {
                setTheme(defaultBgBody, defaultBgNav, defaultText, '#a020f0', '#a020f0', defaultTerm)
            }
            if(cmd === "blue") {
                setTheme(defaultBgBody, defaultBgNav, defaultText, '#007bff', '#007bff', defaultTerm)
            }
            if(cmd === "yellow") {
                setTheme(defaultBgBody, defaultBgNav, defaultText, '#ffd700', '#ffd700', defaultTerm)
            }
            if(cmd === "green") {
                setTheme(defaultBgBody, defaultBgNav, defaultText, '#00ff00', '#00ff00', defaultTerm)
            }
            if(cmd === "cyberpunk") {
                setTheme('#050514', '#02020a', '#00ffff', '#ff007f', '#ff007f', '#0a0a1a')
            }
            if(cmd === "ocean") {
                setTheme('#001a33', '#000d1a', '#e6f2ff', '#00bfff', '#00bfff', '#001326')
            }
            if(cmd === "matrix") {
                setTheme('#000000', '#001100', '#00ff00', '#00ff00', '#00ff00', '#000000')
                if(!document.getElementById('matrix-canvas')){
                    const canvas = document.createElement('canvas')
                    canvas.id = 'matrix-canvas'
                    canvas.style.position = 'fixed'
                    canvas.style.top = '0'
                    canvas.style.left = '0'
                    canvas.style.width = '100vw'
                    canvas.style.height = '100vh'
                    canvas.style.zIndex = '-1'
                    document.body.appendChild(canvas)
                    const ctx = canvas.getContext('2d')
                    canvas.width = window.innerWidth
                    canvas.height = window.innerHeight
                    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*]*'.split('')
                    const fontSize = 16
                    const columns = canvas.width / fontSize
                    const drops = []
                    for(let x = 0; x < columns; x++) drops[x] = 1
                    window.matrixInterval = setInterval(() => {
                        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
                        ctx.fillRect(0, 0, canvas.width, canvas.height)
                        ctx.fillStyle = '#0F0'
                        ctx.font = fontSize + 'px monospace'
                        for(let i = 0; i < drops.length; i++) {
                            const text = letters[Math.floor(Math.random() * letters.length)]
                            ctx.fillText(text, i * fontSize, drops[i] * fontSize)
                            if(drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0
                            drops[i]++
                        }
                    }, 33)
                }
            }
        }
        executeCmd(command)
        input.value = ""
    }

})