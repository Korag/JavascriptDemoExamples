// Zbuduj alfabet za pomocą bufora i wyświetl go w ascii i UTF

// var buf = Buffer.from('aąbcćdeęfghijklłmnńoóprsśtuwyzźż');

// var buf = new Buffer(26);
// for (var i = 0 ; i < 26 ; i++)
// {
//   buf[i] = i + 97;
// }

// console.log(buf.toString('ascii'));
// console.log(buf.toString('utf8'));

// (*) Za pomocą pętli i kopiowania bloków wygeneruj grafikę tekstową

var kropki = new Buffer(76);

for (var i=0; i<76; i++)
{
  kropki[i] = 46;
}

var iksy = new Buffer(27);

for (var i=0; i<27; i++)
{
  iksy[i] = 88;
}

var hash = new Buffer(25);

for (var i=0; i<25; i++)
{
  hash[i] = 35;
}

var img = new Buffer(900);

kropki.copy(img);
kropki.copy(img,77,0);

var z = 154;
var t = 28;
var s = 21;
for(var i=0;i<4;i++)
{
    kropki.copy(img,z,0,t);
    z = z + t;
    iksy.copy(img,z,0,s);
    z = z + s;
    kropki.copy(img,z,0,t);
    z = z + t;

    t=t-1;
    s=s+2;
}

t = 26;
var k = 3;
for(var i=0;i<6;i++)
{
    kropki.copy(img,z,0,t);
    z = z + t;
    if (i==0)
    {
    hash.copy(img,z,0,25);
    z = z + 25;
    }
    if (i==1 || i==2)
    {
        hash.copy(img,z,0,k);
        z = z + k;
        kropki.copy(img,z,0,k);
        z = z + k;
        if (i==1)
        {
        hash.copy(img,z,0,12);
        z = z + 12;
        }
        else
        {
            hash.copy(img,z,0,5);
            z = z + 5;
            kropki.copy(img,z,0,k-1);
            z = z + k - 1;
            hash.copy(img,z,0,5);
            z = z + 5;
        }
        kropki.copy(img,z,0,k);
        z = z + k;
        hash.copy(img,z,0,k+1);
        z = z + k + 1;
    }
    if (i==3 || i ==4)
    {
        hash.copy(img,z,0,11);
        z = z + 11;
        kropki.copy(img,z,0,k-1);
        z = z + k - 1;
        hash.copy(img,z,0,12);
        z = z + 12;
    }
    kropki.copy(img,z,0,t);
    z = z + t;
}

for (var i=0; i<820 ;i+=77)
{
    console.log(img.toString('ascii',i,i+76));
}
