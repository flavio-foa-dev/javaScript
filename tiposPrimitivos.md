 Dentro do JavaScript temos três tipos principais, que são os primitivos, . Que são os Numbers, que serve para armazenar números; as Strings, que servem para armazenar textos e caracteres; e os Booleanos, que servem para armazenar verdadeiros ou falsos
 Mas existem ainda mais dois tipos: null e undefined

 O null é um tipo especial, pois pode ser traduzido como “ausência de valor” e pode ser atribuído como valor de uma variável:

let input = null;

if (input === null) {
 console.log('não há informação');
} else {
 console.log(input);
}

let input = null;
let input2;

console.log(input); // null
console.log(input2); // undefined

É aqui que entra o tipo undefined. Este tipo também representa “ausência de valor”, porém de uma outra forma: usualmente, enquanto null é um valor atribuído a uma variável que existe e foi iniciada, undefined se refere ao valor de uma variável que não foi inicializada (ou seja, não foi atribuído nenhum valor a ela).

 Tem uma coisa muito interessante que vemos, às vezes, quando estamos fazendo nossas primeiras operações com números no JavaScript, que é o que acontece quando o JavaScript tenta fazer operações com números, mas, ele não consegue. Que é o Not a Number   NaN, o tal do Not a Number.

 No JavaScript temos um método chamado toLocaleString() que converte um número para uma string, já tratando a questão do arredondamento e convertendo para a moeda do país que queremos, no nosso caso, o real, tornando a tarefa do programador muito mais simples.

 style : Que é o estilo do formato a ser utilizado, aqui é permitido usar:

decimal para representar números simples.

currency que diz respeito ao formato monetário e que vai indicar a moeda que vai ser utilizada.

percent para formato percentual.

currency: A moeda para usar na formatação monetária

const formatado = salarioHora.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });



const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

Os caracteres \u no início do código são caracteres de escape que usamos para sinalizar ao JavaScript de que estamos falando de códigos Unicode, e não de strings de texto usuais.



const senha = "minhaSenha123"
console.log(senha.length) // 13 caracteres

Percebeu que length não leva parênteses no final da palavra? Há uma diferença entre métodos e propriedades que não vamos abordar durante este curso, mas vamos deixar aqui a dica caso tenha curiosidade! ;)


- camelCase: Inicia com letra minúscula e a primeira letra de cada palavra em seguida é escrita com letra maiúscula. Por exemplo: minhaVar ou senhaDoUsuario. Esta é a convenção utilizada pelo JavaScript para variáveis e funções.
- snake_case: Os espaços são substituídos pelo caractere _ (underline), com todas as palavras em letra minúscula. Por exemplo: minha_variavel ou senha_do_usuario.
- kebab-case: Similar ao anterior, porém com os espaços substituídos por hífens. Por exemplo: minha-var ou senha-do-usuario. Esta convenção não pode ser utilizada no JavaScript para variáveis e funções.
- PascalCase: Similar ao CamelCase, porém neste caso todas as palavras começam com letra maiúscula. Por exemplo: MinhaVar ou SenhaDoCliente.


A melhor prática, nesse caso, é não utilizar nenhum dos termos da lista abaixo como identificadores, seja de variáveis, funções, classes ou qualquer outro bloco que precise de um nome. As únicas exceções são from, set e target, que são seguras e comumente utilizadas.
arguments
as
async
await
break
case
catch
class
const
continue
debugger
default
delete
do
else
eval
export
extends
false
finally
for
from
function
get
if
import
in
instanceof
let
of
new
null
return
set
static
super
switch
target
this
throw
true
try
typeof
var
void
while
with
yield