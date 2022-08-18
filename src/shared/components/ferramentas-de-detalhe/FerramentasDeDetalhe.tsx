import { Button, Divider, Icon, Paper, Skeleton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';

interface IFerramentasDeDetalheProps {
    textoBotaoNovo?: string;
    textoBotaoVoltar?: string;
    textoBotaoApagar?: string;
    textoBotaoSalvar?: string;
    textoBotaoSalvarEFechar?: string;

    mostrarBotaoNovo?:boolean;
    mostrarBotaoVoltar?:boolean;
    mostrarBotaoApagar?:boolean;
    mostrarBotaoSalvar?:boolean;
    mostrarBotaoSalvarEFechar?:boolean;

    mostrarBotaoNovoCarregando?:boolean;
    mostrarBotaoVoltarCarregando?:boolean;
    mostrarBotaoApagarCarregando?:boolean;
    mostrarBotaoSalvarCarregando?:boolean;
    mostrarBotaoSalvarEFecharCarregando?:boolean;

    aoClicarEmNovo?:() => void;
    aoClicarEmVoltar?:() => void;
    aoClicarEmApagar?:() => void;
    aoClicarEmSalvar?:() => void;
    aoClicarEmSalvarEFechar?:() => void;
}

export const FerramentasDeDetalhe: React.FC<IFerramentasDeDetalheProps> = ({
    textoBotaoNovo = 'Novo',
    textoBotaoVoltar = 'Voltar',
    textoBotaoApagar = 'Apagar',
    textoBotaoSalvar = 'Salvar',
    textoBotaoSalvarEFechar = 'Salvar e Fechar',

    mostrarBotaoNovo = true,
    mostrarBotaoVoltar = true,
    mostrarBotaoApagar = true,
    mostrarBotaoSalvar = true,
    mostrarBotaoSalvarEFechar = false,

    mostrarBotaoNovoCarregando = false,
    mostrarBotaoVoltarCarregando = false,
    mostrarBotaoApagarCarregando = false,
    mostrarBotaoSalvarCarregando = false,
    mostrarBotaoSalvarEFecharCarregando = false,

    aoClicarEmNovo,
    aoClicarEmVoltar,
    aoClicarEmApagar,
    aoClicarEmSalvar,
    aoClicarEmSalvarEFechar,

}) => {

    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    const mdDown = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box 
            gap={1}
            marginX={1}
            padding={1}
            paddingX={2}
            display='flex'
            alignItems='center'
            height={theme.spacing(5)}
            component={Paper}
        >
            {mostrarBotaoSalvar && !mostrarBotaoSalvarCarregando && (<Button
                color='primary'
                disableElevation
                variant='contained'
                onClick={aoClicarEmSalvar}
                startIcon={<Icon>save</Icon>}
            >
                <Typography variant='button' whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
                    {textoBotaoSalvar}
                </Typography>
            </Button>)}
            {mostrarBotaoSalvarCarregando && (<Skeleton width={110} height={60}/>)}

            { mostrarBotaoSalvarEFechar && !mostrarBotaoSalvarEFecharCarregando && !smDown && !mdDown && (<Button
                color='primary'
                disableElevation
                variant='outlined'
                onClick={aoClicarEmSalvarEFechar}
                startIcon={<Icon>save</Icon>}
            >
                <Typography variant='button' whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
                    {textoBotaoSalvarEFechar}
                </Typography>
            </Button>)}
            {mostrarBotaoSalvarEFecharCarregando && !smDown && !mdDown && (<Skeleton width={180} height={60}/>)}

            { mostrarBotaoApagar && !mostrarBotaoApagarCarregando && (<Button
                color='primary'
                disableElevation
                variant='outlined'
                onClick={aoClicarEmApagar}
                startIcon={<Icon>delete</Icon>}
            >
                <Typography variant='button' whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
                    {textoBotaoApagar}
                </Typography>
            </Button>)}
            {mostrarBotaoApagarCarregando && (<Skeleton width={110} height={60}/>)}

            { mostrarBotaoNovo && !mostrarBotaoVoltarCarregando && !smDown &&(<Button
                color='primary'
                disableElevation
                variant='outlined'
                onClick={aoClicarEmNovo}
                startIcon={<Icon>add</Icon>}
            >
                <Typography variant='button' whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
                    {textoBotaoNovo}
                </Typography>
            </Button>)}
            {mostrarBotaoVoltarCarregando && !smDown && (<Skeleton width={110} height={60}/>)}

            {(
                mostrarBotaoVoltar && (mostrarBotaoNovo || mostrarBotaoApagar || mostrarBotaoSalvar || mostrarBotaoSalvarEFechar) &&
                <Divider variant='middle' orientation='vertical'/>
            )}

            { mostrarBotaoVoltar && !mostrarBotaoNovoCarregando && (<Button
                color='primary'
                disableElevation
                variant='contained'
                onClick={aoClicarEmVoltar}
                startIcon={<Icon>arrow_back</Icon>}
            >
                <Typography variant='button' whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
                    {textoBotaoVoltar}
                </Typography>
            </Button>)}
            {mostrarBotaoNovoCarregando && (<Skeleton width={95} height={60}/>)}

        </Box>
    );
};