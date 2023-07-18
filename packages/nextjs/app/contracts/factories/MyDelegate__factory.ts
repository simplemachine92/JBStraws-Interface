/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MyDelegate, MyDelegateInterface } from "../MyDelegate";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IJBOperatorStore",
        name: "_operatorStore",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "projectId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "INVALID_PAYMENT_EVENT",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "projectId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "INVALID_REDEMPTION_EVENT",
    type: "error",
  },
  {
    inputs: [],
    name: "UNAUTHORIZED",
    type: "error",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "payer",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "projectId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "currentFundingCycleConfiguration",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "decimals",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "currency",
                type: "uint256",
              },
            ],
            internalType: "struct JBTokenAmount",
            name: "amount",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "decimals",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "currency",
                type: "uint256",
              },
            ],
            internalType: "struct JBTokenAmount",
            name: "forwardedAmount",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "projectTokenCount",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "beneficiary",
            type: "address",
          },
          {
            internalType: "bool",
            name: "preferClaimedTokens",
            type: "bool",
          },
          {
            internalType: "string",
            name: "memo",
            type: "string",
          },
          {
            internalType: "bytes",
            name: "dataSourceMetadata",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "payerMetadata",
            type: "bytes",
          },
        ],
        internalType: "struct JBDidPayData3_1_1",
        name: "_data",
        type: "tuple",
      },
    ],
    name: "didPay",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "holder",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "projectId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "currentFundingCycleConfiguration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "projectTokenCount",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "decimals",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "currency",
                type: "uint256",
              },
            ],
            internalType: "struct JBTokenAmount",
            name: "reclaimedAmount",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "decimals",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "currency",
                type: "uint256",
              },
            ],
            internalType: "struct JBTokenAmount",
            name: "forwardedAmount",
            type: "tuple",
          },
          {
            internalType: "address payable",
            name: "beneficiary",
            type: "address",
          },
          {
            internalType: "string",
            name: "memo",
            type: "string",
          },
          {
            internalType: "bytes",
            name: "dataSourceMetadata",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "redeemerMetadata",
            type: "bytes",
          },
        ],
        internalType: "struct JBDidRedeemData3_1_1",
        name: "_data",
        type: "tuple",
      },
    ],
    name: "didRedeem",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "directory",
    outputs: [
      {
        internalType: "contract IJBDirectory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_projectId",
        type: "uint256",
      },
      {
        internalType: "contract IJBDirectory",
        name: "_directory",
        type: "address",
      },
      {
        components: [
          {
            internalType: "bytes32",
            name: "allowedRoot",
            type: "bytes32",
          },
        ],
        internalType: "struct DeployMyDelegateData",
        name: "_deployMyDelegateData",
        type: "tuple",
      },
      {
        internalType: "contract IJBController3_1",
        name: "controller",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "operatorStore",
    outputs: [
      {
        internalType: "contract IJBOperatorStore",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IJBPaymentTerminal",
            name: "terminal",
            type: "address",
          },
          {
            internalType: "address",
            name: "payer",
            type: "address",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "decimals",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "currency",
                type: "uint256",
              },
            ],
            internalType: "struct JBTokenAmount",
            name: "amount",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "projectId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "currentFundingCycleConfiguration",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "beneficiary",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "weight",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "reservedRate",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "memo",
            type: "string",
          },
          {
            internalType: "bytes",
            name: "metadata",
            type: "bytes",
          },
        ],
        internalType: "struct JBPayParamsData",
        name: "_data",
        type: "tuple",
      },
    ],
    name: "payParams",
    outputs: [
      {
        internalType: "uint256",
        name: "weight",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "memo",
        type: "string",
      },
      {
        components: [
          {
            internalType: "contract IJBPayDelegate3_1_1",
            name: "delegate",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "metadata",
            type: "bytes",
          },
        ],
        internalType: "struct JBPayDelegateAllocation3_1_1[]",
        name: "delegateAllocations",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "projectId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IJBPaymentTerminal",
            name: "terminal",
            type: "address",
          },
          {
            internalType: "address",
            name: "holder",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "projectId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "currentFundingCycleConfiguration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "tokenCount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalSupply",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "overflow",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "decimals",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "currency",
                type: "uint256",
              },
            ],
            internalType: "struct JBTokenAmount",
            name: "reclaimAmount",
            type: "tuple",
          },
          {
            internalType: "bool",
            name: "useTotalOverflow",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "redemptionRate",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "memo",
            type: "string",
          },
          {
            internalType: "bytes",
            name: "metadata",
            type: "bytes",
          },
        ],
        internalType: "struct JBRedeemParamsData",
        name: "_data",
        type: "tuple",
      },
    ],
    name: "redeemParams",
    outputs: [
      {
        internalType: "uint256",
        name: "reclaimAmount",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "memo",
        type: "string",
      },
      {
        components: [
          {
            internalType: "contract IJBRedemptionDelegate3_1_1",
            name: "delegate",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "metadata",
            type: "bytes",
          },
        ],
        internalType: "struct JBRedemptionDelegateAllocation3_1_1[]",
        name: "delegateAllocations",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "root",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_root",
        type: "bytes32",
      },
    ],
    name: "setRoot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "togglewhitelistEnabled",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "proof",
        type: "bytes32[]",
      },
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "verify",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "whitelistEnabled",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a060405234801561001057600080fd5b5060405161114a38038061114a83398101604081905261002f91610040565b6001600160a01b0316608052610070565b60006020828403121561005257600080fd5b81516001600160a01b038116811461006957600080fd5b9392505050565b6080516110b1610099600039600081816102130152818161094a01526109f101526110b16000f3fe6080604052600436106100dd5760003560e01c80636b2049431161007f578063c41c2f2411610059578063c41c2f241461024d578063d46cf1711461026d578063dab5f3401461029c578063ebf0c717146102bc57600080fd5b80636b204943146101bf578063a51cfd18146101d2578063ad007d631461020157600080fd5b80631d662e87116100bb5780631d662e871461014c5780633fafa1271461016157806351fb012d14610185578063659a10261461019f57600080fd5b806301ffc9a7146100e25780630683e1cc146101175780630bf46e5914610139575b600080fd5b3480156100ee57600080fd5b506101026100fd366004610b16565b6102d2565b60405190151581526020015b60405180910390f35b34801561012357600080fd5b50610137610132366004610b6b565b610324565b005b610137610147366004610bf1565b61036a565b34801561015857600080fd5b50610137610435565b34801561016d57600080fd5b5061017760025481565b60405190815260200161010e565b34801561019157600080fd5b506001546101029060ff1681565b3480156101ab57600080fd5b506101026101ba366004610cc8565b610537565b6101376101cd366004610d1a565b61059c565b3480156101de57600080fd5b506101f26101ed366004610d56565b610655565b60405161010e93929190610dd8565b34801561020d57600080fd5b506102357f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161010e565b34801561025957600080fd5b50600354610235906001600160a01b031681565b34801561027957600080fd5b5061028d610288366004610e76565b6107ab565b60405161010e93929190610eb2565b3480156102a857600080fd5b506101376102b7366004610f3e565b610810565b3480156102c857600080fd5b5061017760005481565b60006001600160e01b031982166371700c6960e01b148061030357506001600160e01b03198216636b20494360e01b145b8061031e57506001600160e01b03198216630bf46e5960e01b145b92915050565b6002541561033157600080fd5b600293909355600380546001600160a01b039384166001600160a01b031991821617909155905160005560048054929093169116179055565b341515806103ec5750600354600254604051636e49181f60e01b815260048101919091523360248201526001600160a01b0390911690636e49181f90604401602060405180830381865afa1580156103c6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103ea9190610f57565b155b806103fd5750600254816020013514155b156104325760405163dbd1cb8760e01b8152336004820152602082013560248201523460448201526064015b60405180910390fd5b50565b60048054604080516322de550f60e21b815290516001600160a01b0390921692638b79543c9282820192602092908290030181865afa15801561047c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104a09190610f79565b6001600160a01b0316636352211e6002546040518263ffffffff1660e01b81526004016104cf91815260200190565b602060405180830381865afa1580156104ec573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105109190610f79565b6002546001610520838383610903565b50506001805460ff19811660ff9091161517905550565b600080546001600160a01b0383169061055290859083610a81565b6105925760405162461bcd60e51b8152602060048201526011602482015270139bdd08125b88105b1b1bddc8131a5cdd607a1b6044820152606401610429565b5060019392505050565b600354600254604051636e49181f60e01b815260048101919091523360248201526001600160a01b0390911690636e49181f90604401602060405180830381865afa1580156105ef573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106139190610f57565b15806106255750600254816020013514155b156104325760405163992405f760e01b815233600482015260208201356024820152346044820152606401610429565b6000606080826106696101c0860186610f96565b8101906106769190610fe4565b9050600061068a6040870160208801611021565b6001805491925060ff909116151590036106aa576106a88282610537565b505b61010086013594506106c06101a0870187610f96565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092965060019250610700915050565b60405190808252806020026020018201604052801561074d57816020015b6040805160608082018352600080835260208301529181019190915281526020019060019003908161071e5790505b5092506040518060600160405280306001600160a01b031681526020016000815260200160405180602001604052806000815250815250836000815181106107975761079761103e565b602002602001018190525050509193909250565b6000606080826107bf610180860186610f96565b8101906107cc9190610fe4565b905060006107e06040870160208801611021565b60015490915060ff16156107fa576107f88282610537565b505b61012086013594506106c0610160870187610f96565b60048054604080516322de550f60e21b815290516001600160a01b0390921692638b79543c9282820192602092908290030181865afa158015610857573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061087b9190610f79565b6001600160a01b0316636352211e6002546040518263ffffffff1660e01b81526004016108aa91815260200190565b602060405180830381865afa1580156108c7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108eb9190610f79565b60025460016108fb838383610903565b505050600055565b336001600160a01b038416148015906109b7575060405163c161c93f60e01b81523360048201526001600160a01b03848116602483015260448201849052606482018390527f0000000000000000000000000000000000000000000000000000000000000000169063c161c93f90608401602060405180830381865afa158015610991573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109b59190610f57565b155b8015610a5e575060405163c161c93f60e01b81523360048201526001600160a01b03848116602483015260006044830152606482018390527f0000000000000000000000000000000000000000000000000000000000000000169063c161c93f90608401602060405180830381865afa158015610a38573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a5c9190610f57565b155b15610a7c5760405163075fd2b160e01b815260040160405180910390fd5b505050565b600082610a8e8584610a97565b14949350505050565b600081815b8451811015610adc57610ac882868381518110610abb57610abb61103e565b6020026020010151610ae4565b915080610ad481611054565b915050610a9c565b509392505050565b6000818310610b00576000828152602084905260409020610b0f565b60008381526020839052604090205b9392505050565b600060208284031215610b2857600080fd5b81356001600160e01b031981168114610b0f57600080fd5b6001600160a01b038116811461043257600080fd5b634e487b7160e01b600052604160045260246000fd5b6000806000808486036080811215610b8257600080fd5b853594506020860135610b9481610b40565b93506020603f1982011215610ba857600080fd5b506040516020810181811067ffffffffffffffff82111715610bcc57610bcc610b55565b6040908152860135815291506060850135610be681610b40565b939692955090935050565b600060208284031215610c0357600080fd5b813567ffffffffffffffff811115610c1a57600080fd5b82016102008185031215610b0f57600080fd5b600082601f830112610c3e57600080fd5b8135602067ffffffffffffffff80831115610c5b57610c5b610b55565b8260051b604051601f19603f83011681018181108482111715610c8057610c80610b55565b604052938452858101830193838101925087851115610c9e57600080fd5b83870191505b84821015610cbd57813583529183019190830190610ca4565b979650505050505050565b60008060408385031215610cdb57600080fd5b823567ffffffffffffffff811115610cf257600080fd5b610cfe85828601610c2d565b9250506020830135610d0f81610b40565b809150509250929050565b600060208284031215610d2c57600080fd5b813567ffffffffffffffff811115610d4357600080fd5b82016102208185031215610b0f57600080fd5b600060208284031215610d6857600080fd5b813567ffffffffffffffff811115610d7f57600080fd5b82016101e08185031215610b0f57600080fd5b6000815180845260005b81811015610db857602081850181015186830182015201610d9c565b506000602082860101526020601f19601f83011685010191505092915050565b6000606085835260208181850152610df282850187610d92565b6040858203818701528187518084528484019150848160051b850101858a0160005b83811015610e6457868303601f19018552815180516001600160a01b0316845288810151898501528601518684018a9052610e518a850182610d92565b9589019593505090870190600101610e14565b50909c9b505050505050505050505050565b600060208284031215610e8857600080fd5b813567ffffffffffffffff811115610e9f57600080fd5b82016101a08185031215610b0f57600080fd5b6000606085835260208181850152610ecc82850187610d92565b6040858203818701528187518084528484019150848160051b850101858a0160005b83811015610e6457868303601f19018552815180516001600160a01b0316845288810151898501528601518684018a9052610f2b8a850182610d92565b9589019593505090870190600101610eee565b600060208284031215610f5057600080fd5b5035919050565b600060208284031215610f6957600080fd5b81518015158114610b0f57600080fd5b600060208284031215610f8b57600080fd5b8151610b0f81610b40565b6000808335601e19843603018112610fad57600080fd5b83018035915067ffffffffffffffff821115610fc857600080fd5b602001915036819003821315610fdd57600080fd5b9250929050565b600060208284031215610ff657600080fd5b813567ffffffffffffffff81111561100d57600080fd5b61101984828501610c2d565b949350505050565b60006020828403121561103357600080fd5b8135610b0f81610b40565b634e487b7160e01b600052603260045260246000fd5b60006001820161107457634e487b7160e01b600052601160045260246000fd5b506001019056fea264697066735822122027333506090ab1eeafcced80d6765384806222ba8a15e60a736511bc1361184f64736f6c63430008140033";

type MyDelegateConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MyDelegateConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MyDelegate__factory extends ContractFactory {
  constructor(...args: MyDelegateConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _operatorStore: string,
    overrides?: Overrides & { from?: string }
  ): Promise<MyDelegate> {
    return super.deploy(_operatorStore, overrides || {}) as Promise<MyDelegate>;
  }
  override getDeployTransaction(
    _operatorStore: string,
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(_operatorStore, overrides || {});
  }
  override attach(address: string): MyDelegate {
    return super.attach(address) as MyDelegate;
  }
  override connect(signer: Signer): MyDelegate__factory {
    return super.connect(signer) as MyDelegate__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MyDelegateInterface {
    return new utils.Interface(_abi) as MyDelegateInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MyDelegate {
    return new Contract(address, _abi, signerOrProvider) as MyDelegate;
  }
}