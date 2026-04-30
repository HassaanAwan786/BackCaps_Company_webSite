import { useEffect, useRef } from 'react';

const BackgroundCanvas = ({ mousePosRef }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const symbols = ['Σ', 'Π', 'Ω', '$', '%', '#', 'ア', 'タ', 'ウ', 'エ', 'オ', '[', ']', '+', '1', '0', 'Ω', 'λ', 'μ'];
        const fontSize = 24;
        const spacing = 80;
        
        // Initial columns/rows calculation
        let columns = Math.ceil(window.innerWidth / spacing) + 1;
        let rows = Math.ceil(window.innerHeight / spacing) + 1;

        let grid = [];
        const initGrid = () => {
            columns = Math.ceil(window.innerWidth / spacing) + 1;
            rows = Math.ceil(window.innerHeight / spacing) + 1;
            grid = [];
            for (let i = 0; i < rows; i++) {
                grid[i] = [];
                for (let j = 0; j < columns; j++) {
                    grid[i][j] = symbols[Math.floor(Math.random() * symbols.length)];
                }
            }
        };

        initGrid();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initGrid();
        };

        window.addEventListener('resize', handleResize);

        const render = () => {
            if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < columns; j++) {
                    if (Math.random() > 0.99) {
                        grid[i][j] = symbols[Math.floor(Math.random() * symbols.length)];
                    }
                }
            }

            ctx.font = `${fontSize}px Outfit`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            const gradient = ctx.createRadialGradient(
                mousePosRef.current.x, mousePosRef.current.y, 0,
                mousePosRef.current.x, mousePosRef.current.y, 250
            );
            gradient.addColorStop(0, 'rgba(59, 130, 246, 0.8)');
            gradient.addColorStop(0.4, 'rgba(59, 130, 246, 0.2)');
            gradient.addColorStop(1, 'rgba(59, 130, 246, 0.05)');

            ctx.fillStyle = gradient;

            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < columns; j++) {
                    const xPos = j * spacing + spacing / 2;
                    const yPos = i * spacing + spacing / 2;
                    ctx.fillText(grid[i][j], xPos, yPos);
                }
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
        };
    }, [mousePosRef]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0"
            style={{ opacity: 1 }}
        />
    );
};

export default BackgroundCanvas;
