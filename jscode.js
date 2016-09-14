arg = [2, 4, 5, 7, -3, 13];
act = ['+', '*', '-', '/', '+'];
prior = ['*', '/'];
res = 0;
for (i = 0; i < length(arg); i++)
{
    if (i >= length(arg)-1)
    {
        i = 0;
    }
    b = act[i];
    if (b in prior)
    {
        if (b === "*")
        {
            arg[i] = arg[i]*arg[i+1];
            arg.remove(arg[i+1]);
            act.remove(act[i]);
            i -= 1;
        }
        else if (b === "/")
        {
            if (arg[i+1] !== 0)
            {
                arg[i] = arg[i]/arg[i+1];
                arg.remove(arg[i+1]);
                act.remove(act[i]);
                i -= 1;
            };
        }
            else
            {
                print("Не можна дiлити на 0");
            }
    }
    else
    {
        print("Не iснуюча дiя");
    }
    i += 1;
}
for (t = 0; t < length(arg); t++)
{
    if (length(act) === 0)
    {
        break
    }
    if (t >= length(arg)-1)
    {
        t = 0;
    }
    b = act[t];
    if (b === "+")
    {
        arg[t] = arg[t]+arg[t+1];
        arg.remove(arg[t+1]);
        act.remove(act[t]);
    }
    else if (b === "-")
    {
        arg[t] = arg[t]-arg[t+1];
        arg.remove(arg[t+1]);
        act.remove(act[t]);
    }
}
res = arg[0];
alert("Вiдповiдь",res);
