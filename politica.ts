export class PrivacyPolicy {
    private lastUpdated: string = '2024-10-08';

    getPolicy(): string {
        return `
        <h1>Política de Privacidade</h1>
        <p><strong>Última atualização:</strong> ${this.lastUpdated}</p>

        <p>Esta Política de Privacidade descreve como o seu aplicativo (referido como "Aplicativo", "nós", "nos" ou "nosso") coleta, usa, armazena e compartilha informações quando você usa nosso serviço. Este Aplicativo usa login anônimo no Firebase e coleta informações mínimas necessárias para o funcionamento.</p>

        <h2>1. Coleta de Informações</h2>
        <p>O Aplicativo não coleta informações pessoais identificáveis diretamente. No entanto, ao utilizar o Firebase e exibir anúncios de terceiros, algumas informações podem ser coletadas automaticamente, como:</p>
        <ul>
            <li>Identificadores de dispositivo;</li>
            <li>Dados de uso do aplicativo (como tempo de uso, número de sessões, etc.);</li>
            <li>Dados relacionados à exibição de anúncios (como anúncios assistidos e interação com anúncios).</li>
        </ul>

        <h2>2. Uso de Dados</h2>
        <p>Os dados coletados são usados para:</p>
        <ul>
            <li><strong>Autenticação anônima:</strong> O Firebase Authentication permite que você faça login anonimamente no aplicativo, sem que suas informações pessoais sejam coletadas.</li>
            <li><strong>Exibição de anúncios:</strong> Anúncios são exibidos para gerar receita. Dados sobre seu uso do aplicativo podem ser compartilhados com provedores de anúncios.</li>
            <li><strong>Armazenamento de códigos:</strong> Os códigos gerados são armazenados no Firebase Realtime Database e não contêm informações pessoais.</li>
        </ul>

        <h2>3. Compartilhamento de Dados</h2>
        <p>Não vendemos ou compartilhamos suas informações pessoais com terceiros, exceto conforme necessário para:</p>
        <ul>
            <li>Provedores de serviço: Como Firebase e serviços de publicidade.</li>
            <li>Obrigações legais: Quando exigido por lei ou para proteger nossos direitos legais.</li>
        </ul>

        <h2>4. Cookies e Tecnologias de Rastreamento</h2>
        <p>Anúncios de terceiros podem usar cookies ou outras tecnologias de rastreamento para coletar dados sobre o comportamento do usuário. Isso inclui personalização de anúncios ou análise de desempenho de anúncios.</p>

        <h2>5. Segurança</h2>
        <p>Empregamos medidas técnicas e organizacionais para proteger as informações coletadas e armazenadas por nós. No entanto, nenhuma transmissão pela Internet é totalmente segura, e não podemos garantir a segurança absoluta dos dados.</p>

        <h2>6. Direitos do Usuário</h2>
        <p>Como o login é anônimo, você pode parar de usar o Aplicativo a qualquer momento sem a necessidade de solicitar a exclusão de dados pessoais, já que nenhuma informação identificável pessoal é armazenada diretamente. No entanto, você pode solicitar mais informações sobre como o Firebase lida com dados acessando a <a href="https://firebase.google.com/support/privacy">Política de Privacidade do Firebase</a>.</p>

        <h2>7. Alterações a esta Política de Privacidade</h2>
        <p>Podemos atualizar esta política periodicamente para refletir mudanças no serviço ou nas práticas de dados. A versão mais recente estará sempre disponível dentro do Aplicativo. Recomendamos que você reveja esta página com frequência para verificar possíveis atualizações.</p>
        `;
    }
}
