# Python-Django-React-CRUD-Test

## Pré Requisitos

1. Python
2. Pip  
3. Django
4. Django Rest Framework
5. Django Cors Headers
6. Node.js / NPM 
7. React
8. Visual Studio Code (React/Python-Django) / PyCharm (Python Django)

## Instalação

Instalar a versão atual do Python, o PIP é automaticamente instalado com o Python.

* Pip - Gereciandor de Pacotes para projetos em Python, Com ele instalamos, removemos
e atualizamos pacotes em nosso Projeto. Exemplo "pip instal django djangorestframework django-cors-headers".

* Django - Framework para desenvolvimento rápido para Web, utiliza o padrão Model-View-Template (MVT).

* Django Rest Framework - É um kit de ferramenta poderoso e flexível para criar APIs da Web.

* Django Cors Headers - Permite que seus recursos sejam acessados em outro dominío. 
No caso usaremos como Front-End o React para acessar os recursos do Django.

* Node.js/NPM - Gerenciado de Pacotes para criar aplicações em React.

* React - É uma biblioteca JavaScript para criar aplicações que rodam no navegador web.

* Obs. Antes de iniciar o processo, é bom criar um virtualenv, porque quando estamos desenvolvendo diversos projetos em Python,
é comum utilizarmos diferentes versões de uma mesma biblioteca entre este projetos. Podendo acarretar conflitos entre as versões
e muita dor de cabeça para o desenvolvedor. Para resolver este problema, o mais correto é a criação de um ambiente 
virtual para cada projeto.  

1. Pelo terminal, acesse a unidade C:\Users\NomeUsuário\AppData\Local\Programs\Python\Python38-32\Lib\site-packages 
digte pip install virtualenv.

2. Depois de instalado, você poderá criar uma virtualenv em seus projetos.

3. Na pasta onde está os seus projetos Python (exemplo pelo terminal acesse C:\Projetos Python\Nome do projeto 
digite virtualenv venv(nome sugestão) então irá criar uma virtualenv no seu projeto.

4. Agora acesse a pasta do seu projeto e você verá uma pasta criada.

5. Acesse pelo terminal C:\Projetos Python\react-django\backend\ digite source venv\Scripts\activate.

6. Pronto você estará na sua virtualenv venv. 

Com a virtulenv instalada e configurada no seu ambiente, podemos iniciar a instalação do Django DjangoRestFramework Django-Cors-Headers.

Após fazer o download do projeto e extraí a pasta no seu ambiente de desenvolvimento. 
(Observação o projeto já tem uma virtualenv com todos os pacotes instalados).

Mas caso queira criar o código novamente seguindo o exemplo para estudo, precisará dos passsos da virtualenv.

No terminal dentro da virtualenv digite pip install django djangorestframework django-cors-headers.

Depois de instalado abra o projeto no seu editor (Visual Studio Code ou PyCharm) e começe a desenvolver.

Para rodar o projeto, dentro da virtualenv, digite no terminal 
C:\Projeto Python\react-django\backend\backendapi python manage.py migrate

Depois irá criar um super usuário para acessar o sistema admin do django
C:\Projeto Python\react-django\backend\backendapi python manage.py createsuperuser
Username: (não precisa mudar, é o seu nome)
Email: (opcional - deixa em branco)
Password: (letras e números - mínimo de 8 caracteres)
Passwrod (again): (repita a senha)
Depois em "y" e Enter

Logo em seguida, rode o servidor
C:\Projeto Python\react-django\backend\backendapi python manage.py runserver

Pelo navegador você irá acessar a página e com a conta de super usuário criada você terá acesso a página admin do django.
http://127.0.0.1:8000/admin/


## REACT

Abra o seu editor (Visual Studio Code) acesse a pasta do projeto e selecione a pasta frontendapp

Acesse pelo terminal do próprio Visul Studio Code ou o Terminal do seu Sistema Operacional e digite npm start

Acesse a página da Url abaixo
http://localhost:3000/

Terá uma página de login onde você irar criar um usuário e senha e clicar em "register" acessando o painel admin do django
terá um usuário criado.

No painel do django tem um opção de Api -> List -> você poderá criar usuários com Nome, Sobrenome e Data de Nascimento.

Quando você acessa novamente a tela de Login do React e clicar em "Login", irá mostrar os usuários cadastrados por você no sistema.

Se você tentar acessar sem estar logado irar mostrar uma tela de erro pois o acesso não está autorizado.

Bom estudo!!!
