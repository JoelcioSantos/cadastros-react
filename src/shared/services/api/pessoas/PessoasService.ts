import { FreeBreakfastRounded, MonetizationOnSharp, OutboxRounded } from "@mui/icons-material";
import { fontWeight } from "@mui/system";
import { Environment } from "../../../environment";
import { Api } from "../axios-config";

interface IPessoa {

}

interface IListagemPessoa {
    id: number;
    nomeCompleto: string;
    email: string;
    cidadeId: number;
}

interface IDetalhePessoa {
    id: number;
    nomeCompleto: string;
    email: string;
    cidadeId: number;
}

type IPessoasComTotalCount = {
    data: IListagemPessoa[];
    totalCount: number;
}

const getAll = async (page = 1, filter = ''): Promise<IPessoasComTotalCount | Error> => {
    try {
        const urlRelativa = `/pessoas?_page=${page}&_limit=${Environment.LIMITE_DE_LINHAS}&nomeCompleto_like=${filter}`;
        const { data, headers } = await Api.get(urlRelativa);

        if (data) {
            return {
                data,
                totalCount: Number(headers['x-total-count'] || Environment.LIMITE_DE_LINHAS),
            };
        }

        return new Error('Erro ao listar os registros.');
    } catch(error) {
        console.log(error);
        
        return new Error((error as { message:string}).message || 'Erro ao listar os registros.');
    }
};

const getById = async (): Promise<any> => {};

const create = async (): Promise<any> => {};

const updateById = async (): Promise<any> => {};

const deleteById = async (): Promise<any> => {};

export const PessoasService = {
    getAll,
    getById,
    create,
    updateById,
    deleteById
};