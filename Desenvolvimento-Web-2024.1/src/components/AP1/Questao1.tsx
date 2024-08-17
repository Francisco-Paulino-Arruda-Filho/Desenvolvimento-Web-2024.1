import { useState } from "react";

// Tipos para as propriedades do componente e para os dados
interface Notas {
    ap1: number;
    ap2: number;
}

interface Aluno {
    nome: string;
    notas: Notas;
}

interface MediaAluno {
    nome: string;
    media: number;
}

interface Questao01BProps {
    alunos: Aluno[];
    msg: (msg: MediaAluno[]) => void;
}

function Questao01B({ alunos, msg }: Questao01BProps) {
    const [media, setMedia] = useState<MediaAluno[]>([]);

    const calcularMedia = () => {
        const medias = alunos.map(aluno => ({
            nome: aluno.nome,
            media: (aluno.notas.ap1 + aluno.notas.ap2) / 2
        }));
        setMedia(medias);
    };

    const falarComPai = () => {
        calcularMedia();
        msg(media);
    };

    return (
        <>
            <h1>Questão 01</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Média</th>
                    </tr>
                </thead>
                <tbody>
                    {media.map((aluno, index) => (
                        <tr key={index}>
                            <td>{aluno.nome}</td>
                            <td>{aluno.media}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={falarComPai}>Enviar mensagem</button>
        </>
    );
}

const Questao01A = () => {
    const [acimaMedia, setAcimaMedia] = useState<MediaAluno[]>([]);

    const mensagemFilho = (msg: MediaAluno[]) => {
        const alunosAcimaMedia = msg.filter(aluno => aluno.media > 7);
        setAcimaMedia(alunosAcimaMedia);
    };

    const alunos: Aluno[] = [
        { nome: "Sicrano", notas: { ap1: 8.4, ap2: 5.4 } },
        { nome: "Beltrano", notas: { ap1: 6.7, ap2: 3.5 } },
        { nome: "Fulano", notas: { ap1: 7.3, ap2: 9.2 } }
    ];

    return (
        <>
            <Questao01B alunos={alunos} msg={mensagemFilho} />
            {acimaMedia.length > 0 && (
                <>
                    <h1>Alunos com média acima de 7</h1>
                    {acimaMedia.map((aluno, index) => (
                        <div key={index}>
                            <h3>{aluno.nome}</h3>
                            <h3>{aluno.media}</h3>
                        </div>
                    ))}
                </>
            )}
        </>
    );
}

export default Questao01A;
