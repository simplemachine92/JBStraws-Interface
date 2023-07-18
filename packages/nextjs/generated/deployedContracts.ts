const contracts = {
  5: [
    {
      chainId: "5",
      name: "goerli",
      contracts: {
        PaymentTerminal: {
          address: "0x82129d4109625F94582bDdF6101a8Cd1a27919f5",
          abi: [
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_baseWeightCurrency",
                  type: "uint256",
                },
                {
                  internalType: "contract IJBOperatorStore",
                  name: "_operatorStore",
                  type: "address",
                },
                {
                  internalType: "contract IJBProjects",
                  name: "_projects",
                  type: "address",
                },
                {
                  internalType: "contract IJBDirectory",
                  name: "_directory",
                  type: "address",
                },
                {
                  internalType: "contract IJBSplitsStore",
                  name: "_splitsStore",
                  type: "address",
                },
                {
                  internalType: "contract IJBPrices",
                  name: "_prices",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_store",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "FEE_TOO_HIGH",
              type: "error",
            },
            {
              inputs: [],
              name: "INADEQUATE_DISTRIBUTION_AMOUNT",
              type: "error",
            },
            {
              inputs: [],
              name: "INADEQUATE_RECLAIM_AMOUNT",
              type: "error",
            },
            {
              inputs: [],
              name: "INADEQUATE_TOKEN_COUNT",
              type: "error",
            },
            {
              inputs: [],
              name: "NO_MSG_VALUE_ALLOWED",
              type: "error",
            },
            {
              inputs: [],
              name: "PAY_TO_ZERO_ADDRESS",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "prod1",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "denominator",
                  type: "uint256",
                },
              ],
              name: "PRBMath__MulDivOverflow",
              type: "error",
            },
            {
              inputs: [],
              name: "PROJECT_TERMINAL_MISMATCH",
              type: "error",
            },
            {
              inputs: [],
              name: "REDEEM_TO_ZERO_ADDRESS",
              type: "error",
            },
            {
              inputs: [],
              name: "TERMINAL_TOKENS_INCOMPATIBLE",
              type: "error",
            },
            {
              inputs: [],
              name: "UNAUTHORIZED",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "projectId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "refundedFees",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "memo",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "bytes",
                  name: "metadata",
                  type: "bytes",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "caller",
                  type: "address",
                },
              ],
              name: "AddToBalance",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "contract IJBPayDelegate",
                  name: "delegate",
                  type: "address",
                },
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
                      name: "metadata",
                      type: "bytes",
                    },
                  ],
                  indexed: false,
                  internalType: "struct JBDidPayData",
                  name: "data",
                  type: "tuple",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "delegatedAmount",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "caller",
                  type: "address",
                },
              ],
              name: "DelegateDidPay",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "contract IJBPayDelegate3_1_1",
                  name: "delegate",
                  type: "address",
                },
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
                  indexed: false,
                  internalType: "struct JBDidPayData3_1_1",
                  name: "data",
                  type: "tuple",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "delegatedAmount",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "caller",
                  type: "address",
                },
              ],
              name: "DelegateDidPay",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "contract IJBRedemptionDelegate",
                  name: "delegate",
                  type: "address",
                },
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
                      name: "metadata",
                      type: "bytes",
                    },
                  ],
                  indexed: false,
                  internalType: "struct JBDidRedeemData",
                  name: "data",
                  type: "tuple",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "delegatedAmount",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "caller",
                  type: "address",
                },
              ],
              name: "DelegateDidRedeem",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "contract IJBRedemptionDelegate3_1_1",
                  name: "delegate",
                  type: "address",
                },
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
                  indexed: false,
                  internalType: "struct JBDidRedeemData3_1_1",
                  name: "data",
                  type: "tuple",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "delegatedAmount",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "fee",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "caller",
                  type: "address",
                },
              ],
              name: "DelegateDidRedeem",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "fundingCycleConfiguration",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "fundingCycleNumber",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "projectId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "beneficiary",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "distributedAmount",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "fee",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "beneficiaryDistributionAmount",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "bytes",
                  name: "metadata",
                  type: "bytes",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "caller",
                  type: "address",
                },
              ],
              name: "DistributePayouts",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "projectId",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "domain",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "group",
                  type: "uint256",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "preferClaimed",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "preferAddToBalance",
                      type: "bool",
                    },
                    {
                      internalType: "uint256",
                      name: "percent",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "projectId",
                      type: "uint256",
                    },
                    {
                      internalType: "address payable",
                      name: "beneficiary",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "lockedUntil",
                      type: "uint256",
                    },
                    {
                      internalType: "contract IJBSplitAllocator",
                      name: "allocator",
                      type: "address",
                    },
                  ],
                  indexed: false,
                  internalType: "struct JBSplit",
                  name: "split",
                  type: "tuple",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "netAmount",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "caller",
                  type: "address",
                },
              ],
              name: "DistributeToPayoutSplit",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "projectId",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "feeProjectId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "bytes",
                  name: "reason",
                  type: "bytes",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "caller",
                  type: "address",
                },
              ],
              name: "FeeReverted",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "projectId",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "fee",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "feeDiscount",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "beneficiary",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "caller",
                  type: "address",
                },
              ],
              name: "HoldFee",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "projectId",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "contract IJBPaymentTerminal",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "caller",
                  type: "address",
                },
              ],
              name: "Migrate",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "fundingCycleConfiguration",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "fundingCycleNumber",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "projectId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "payer",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "beneficiary",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "beneficiaryTokenCount",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "memo",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "bytes",
                  name: "metadata",
                  type: "bytes",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "caller",
                  type: "address",
                },
              ],
              name: "Pay",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "projectId",
                  type: "uint256",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "preferClaimed",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "preferAddToBalance",
                      type: "bool",
                    },
                    {
                      internalType: "uint256",
                      name: "percent",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "projectId",
                      type: "uint256",
                    },
                    {
                      internalType: "address payable",
                      name: "beneficiary",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "lockedUntil",
                      type: "uint256",
                    },
                    {
                      internalType: "contract IJBSplitAllocator",
                      name: "allocator",
                      type: "address",
                    },
                  ],
                  indexed: false,
                  internalType: "struct JBSplit",
                  name: "split",
                  type: "tuple",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "bytes",
                  name: "reason",
                  type: "bytes",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "caller",
                  type: "address",
                },
              ],
              name: "PayoutReverted",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "projectId",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "bool",
                  name: "wasHeld",
                  type: "bool",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "beneficiary",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "caller",
                  type: "address",
                },
              ],
              name: "ProcessFee",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "fundingCycleConfiguration",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "fundingCycleNumber",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "projectId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "holder",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "beneficiary",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "tokenCount",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "reclaimedAmount",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "memo",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "bytes",
                  name: "metadata",
                  type: "bytes",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "caller",
                  type: "address",
                },
              ],
              name: "RedeemTokens",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "projectId",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "refundedFees",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "leftoverAmount",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "caller",
                  type: "address",
                },
              ],
              name: "RefundHeldFees",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "fee",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "caller",
                  type: "address",
                },
              ],
              name: "SetFee",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "feeGauge",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "caller",
                  type: "address",
                },
              ],
              name: "SetFeeGauge",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "addrs",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "bool",
                  name: "flag",
                  type: "bool",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "caller",
                  type: "address",
                },
              ],
              name: "SetFeelessAddress",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "fundingCycleConfiguration",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "fundingCycleNumber",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "projectId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "beneficiary",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "distributedAmount",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "netDistributedamount",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "memo",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "bytes",
                  name: "metadata",
                  type: "bytes",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "caller",
                  type: "address",
                },
              ],
              name: "UseAllowance",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_token",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_projectId",
                  type: "uint256",
                },
              ],
              name: "acceptsToken",
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
              inputs: [
                {
                  internalType: "uint256",
                  name: "_projectId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_token",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "_memo",
                  type: "string",
                },
                {
                  internalType: "bytes",
                  name: "_metadata",
                  type: "bytes",
                },
              ],
              name: "addToBalanceOf",
              outputs: [],
              stateMutability: "payable",
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
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_token",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "_shouldRefundHeldFees",
                  type: "bool",
                },
                {
                  internalType: "string",
                  name: "_memo",
                  type: "string",
                },
                {
                  internalType: "bytes",
                  name: "_metadata",
                  type: "bytes",
                },
              ],
              name: "addToBalanceOf",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "baseWeightCurrency",
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
              inputs: [],
              name: "currency",
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
                  internalType: "address",
                  name: "_token",
                  type: "address",
                },
              ],
              name: "currencyForToken",
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
                  internalType: "uint256",
                  name: "_projectId",
                  type: "uint256",
                },
              ],
              name: "currentEthOverflowOf",
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
              inputs: [],
              name: "decimals",
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
                  internalType: "address",
                  name: "_token",
                  type: "address",
                },
              ],
              name: "decimalsForToken",
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
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_currency",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_token",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_minReturnedTokens",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "_metadata",
                  type: "bytes",
                },
              ],
              name: "distributePayoutsOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "netLeftoverDistributionAmount",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "fee",
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
              inputs: [],
              name: "feeGauge",
              outputs: [
                {
                  internalType: "address",
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
              ],
              name: "heldFeesOf",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "amount",
                      type: "uint256",
                    },
                    {
                      internalType: "uint32",
                      name: "fee",
                      type: "uint32",
                    },
                    {
                      internalType: "uint32",
                      name: "feeDiscount",
                      type: "uint32",
                    },
                    {
                      internalType: "address",
                      name: "beneficiary",
                      type: "address",
                    },
                  ],
                  internalType: "struct JBFee[]",
                  name: "",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "isFeelessAddress",
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
              inputs: [
                {
                  internalType: "uint256",
                  name: "_projectId",
                  type: "uint256",
                },
                {
                  internalType: "contract IJBPaymentTerminal",
                  name: "_to",
                  type: "address",
                },
              ],
              name: "migrate",
              outputs: [
                {
                  internalType: "uint256",
                  name: "balance",
                  type: "uint256",
                },
              ],
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
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
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
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_token",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_beneficiary",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_minReturnedTokens",
                  type: "uint256",
                },
                {
                  internalType: "bool",
                  name: "_preferClaimedTokens",
                  type: "bool",
                },
                {
                  internalType: "string",
                  name: "_memo",
                  type: "string",
                },
                {
                  internalType: "bytes",
                  name: "_metadata",
                  type: "bytes",
                },
              ],
              name: "pay",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "payoutSplitsGroup",
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
              inputs: [],
              name: "prices",
              outputs: [
                {
                  internalType: "contract IJBPrices",
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
              ],
              name: "processFees",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "projects",
              outputs: [
                {
                  internalType: "contract IJBProjects",
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
                  internalType: "address",
                  name: "_holder",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_projectId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_tokenCount",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_token",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_minReturnedTokens",
                  type: "uint256",
                },
                {
                  internalType: "address payable",
                  name: "_beneficiary",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "_memo",
                  type: "string",
                },
                {
                  internalType: "bytes",
                  name: "_metadata",
                  type: "bytes",
                },
              ],
              name: "redeemTokensOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "reclaimAmount",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_fee",
                  type: "uint256",
                },
              ],
              name: "setFee",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_feeGauge",
                  type: "address",
                },
              ],
              name: "setFeeGauge",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_address",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "_flag",
                  type: "bool",
                },
              ],
              name: "setFeelessAddress",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "splitsStore",
              outputs: [
                {
                  internalType: "contract IJBSplitsStore",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "store",
              outputs: [
                {
                  internalType: "address",
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
              name: "token",
              outputs: [
                {
                  internalType: "address",
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
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
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
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_currency",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_token",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_minReturnedTokens",
                  type: "uint256",
                },
                {
                  internalType: "address payable",
                  name: "_beneficiary",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "_memo",
                  type: "string",
                },
                {
                  internalType: "bytes",
                  name: "_metadata",
                  type: "bytes",
                },
              ],
              name: "useAllowanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "netDistributedAmount",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        DelegateContract: {
          address: "0x19f0AF9A6050AaF8391C8fC98432D25B611dE4Ca",
          abi: [
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
          ],
        },
        JBController: {
          address: "0x1d260DE91233e650F136Bf35f8A4ea1F2b68aDB6",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract IJBOperatorStore",
                  name: "_operatorStore",
                  type: "address",
                },
                {
                  internalType: "contract IJBProjects",
                  name: "_projects",
                  type: "address",
                },
                {
                  internalType: "contract IJBDirectory",
                  name: "_directory",
                  type: "address",
                },
                {
                  internalType: "contract IJBFundingCycleStore",
                  name: "_fundingCycleStore",
                  type: "address",
                },
                {
                  internalType: "contract IJBTokenStore",
                  name: "_tokenStore",
                  type: "address",
                },
                {
                  internalType: "contract IJBSplitsStore",
                  name: "_splitsStore",
                  type: "address",
                },
                {
                  internalType: "contract IJBFundAccessConstraintsStore",
                  name: "_fundAccessConstraintsStore",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "BURN_PAUSED_AND_SENDER_NOT_VALID_TERMINAL_DELEGATE",
              type: "error",
            },
            {
              inputs: [],
              name: "FUNDING_CYCLE_ALREADY_LAUNCHED",
              type: "error",
            },
            {
              inputs: [],
              name: "INVALID_BALLOT_REDEMPTION_RATE",
              type: "error",
            },
            {
              inputs: [],
              name: "INVALID_REDEMPTION_RATE",
              type: "error",
            },
            {
              inputs: [],
              name: "INVALID_RESERVED_RATE",
              type: "error",
            },
            {
              inputs: [],
              name: "MIGRATION_NOT_ALLOWED",
              type: "error",
            },
            {
              inputs: [],
              name: "MINT_NOT_ALLOWED_AND_NOT_TERMINAL_DELEGATE",
              type: "error",
            },
            {
              inputs: [],
              name: "NOT_CURRENT_CONTROLLER",
              type: "error",
            },
            {
              inputs: [],
              name: "NO_BURNABLE_TOKENS",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "prod1",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "denominator",
                  type: "uint256",
                },
              ],
              name: "PRBMath__MulDivOverflow",
              type: "error",
            },
            {
              inputs: [],
              name: "UNAUTHORIZED",
              type: "error",
            },
            {
              inputs: [],
              name: "ZERO_TOKENS_TO_MINT",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "holder",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "projectId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "tokenCount",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "memo",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "caller",
                  type: "address",
                },
              ],
              name: "BurnTokens",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "fundingCycleConfiguration",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "fundingCycleNumber",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "projectId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "beneficiary",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "tokenCount",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "beneficiaryTokenCount",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "memo",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "caller",
                  type: "address",
                },
              ],
              name: "DistributeReservedTokens",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "projectId",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "domain",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "group",
                  type: "uint256",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "preferClaimed",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "preferAddToBalance",
                      type: "bool",
                    },
                    {
                      internalType: "uint256",
                      name: "percent",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "projectId",
                      type: "uint256",
                    },
                    {
                      internalType: "address payable",
                      name: "beneficiary",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "lockedUntil",
                      type: "uint256",
                    },
                    {
                      internalType: "contract IJBSplitAllocator",
                      name: "allocator",
                      type: "address",
                    },
                  ],
                  indexed: false,
                  internalType: "struct JBSplit",
                  name: "split",
                  type: "tuple",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "tokenCount",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "caller",
                  type: "address",
                },
              ],
              name: "DistributeToReservedTokenSplit",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "configuration",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "projectId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "memo",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "caller",
                  type: "address",
                },
              ],
              name: "LaunchFundingCycles",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "configuration",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "projectId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "memo",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "caller",
                  type: "address",
                },
              ],
              name: "LaunchProject",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "projectId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "contract IJBMigratable",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "caller",
                  type: "address",
                },
              ],
              name: "Migrate",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "beneficiary",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "projectId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "tokenCount",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "beneficiaryTokenCount",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "memo",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "reservedRate",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "caller",
                  type: "address",
                },
              ],
              name: "MintTokens",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "projectId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "caller",
                  type: "address",
                },
              ],
              name: "PrepMigration",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "configuration",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "projectId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "memo",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "caller",
                  type: "address",
                },
              ],
              name: "ReconfigureFundingCycles",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_holder",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_projectId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_tokenCount",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "_memo",
                  type: "string",
                },
                {
                  internalType: "bool",
                  name: "_preferClaimedTokens",
                  type: "bool",
                },
              ],
              name: "burnTokensOf",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_projectId",
                  type: "uint256",
                },
              ],
              name: "currentFundingCycleOf",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "number",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "configuration",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "basedOn",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "start",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "duration",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "weight",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "discountRate",
                      type: "uint256",
                    },
                    {
                      internalType: "contract IJBFundingCycleBallot",
                      name: "ballot",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "metadata",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct JBFundingCycle",
                  name: "fundingCycle",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      components: [
                        {
                          internalType: "bool",
                          name: "allowSetTerminals",
                          type: "bool",
                        },
                        {
                          internalType: "bool",
                          name: "allowSetController",
                          type: "bool",
                        },
                        {
                          internalType: "bool",
                          name: "pauseTransfers",
                          type: "bool",
                        },
                      ],
                      internalType: "struct JBGlobalFundingCycleMetadata",
                      name: "global",
                      type: "tuple",
                    },
                    {
                      internalType: "uint256",
                      name: "reservedRate",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "redemptionRate",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "ballotRedemptionRate",
                      type: "uint256",
                    },
                    {
                      internalType: "bool",
                      name: "pausePay",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "pauseDistributions",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "pauseRedeem",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "pauseBurn",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "allowMinting",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "allowTerminalMigration",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "allowControllerMigration",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "holdFees",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "preferClaimedTokenOverride",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "useTotalOverflowForRedemptions",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "useDataSourceForPay",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "useDataSourceForRedeem",
                      type: "bool",
                    },
                    {
                      internalType: "address",
                      name: "dataSource",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "metadata",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct JBFundingCycleMetadata",
                  name: "metadata",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
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
                  internalType: "string",
                  name: "_memo",
                  type: "string",
                },
              ],
              name: "distributeReservedTokensOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "fundAccessConstraintsStore",
              outputs: [
                {
                  internalType: "contract IJBFundAccessConstraintsStore",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "fundingCycleStore",
              outputs: [
                {
                  internalType: "contract IJBFundingCycleStore",
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
                  internalType: "uint256",
                  name: "_configuration",
                  type: "uint256",
                },
              ],
              name: "getFundingCycleOf",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "number",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "configuration",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "basedOn",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "start",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "duration",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "weight",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "discountRate",
                      type: "uint256",
                    },
                    {
                      internalType: "contract IJBFundingCycleBallot",
                      name: "ballot",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "metadata",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct JBFundingCycle",
                  name: "fundingCycle",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      components: [
                        {
                          internalType: "bool",
                          name: "allowSetTerminals",
                          type: "bool",
                        },
                        {
                          internalType: "bool",
                          name: "allowSetController",
                          type: "bool",
                        },
                        {
                          internalType: "bool",
                          name: "pauseTransfers",
                          type: "bool",
                        },
                      ],
                      internalType: "struct JBGlobalFundingCycleMetadata",
                      name: "global",
                      type: "tuple",
                    },
                    {
                      internalType: "uint256",
                      name: "reservedRate",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "redemptionRate",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "ballotRedemptionRate",
                      type: "uint256",
                    },
                    {
                      internalType: "bool",
                      name: "pausePay",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "pauseDistributions",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "pauseRedeem",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "pauseBurn",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "allowMinting",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "allowTerminalMigration",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "allowControllerMigration",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "holdFees",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "preferClaimedTokenOverride",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "useTotalOverflowForRedemptions",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "useDataSourceForPay",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "useDataSourceForRedeem",
                      type: "bool",
                    },
                    {
                      internalType: "address",
                      name: "dataSource",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "metadata",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct JBFundingCycleMetadata",
                  name: "metadata",
                  type: "tuple",
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
              ],
              name: "latestConfiguredFundingCycleOf",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "number",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "configuration",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "basedOn",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "start",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "duration",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "weight",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "discountRate",
                      type: "uint256",
                    },
                    {
                      internalType: "contract IJBFundingCycleBallot",
                      name: "ballot",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "metadata",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct JBFundingCycle",
                  name: "fundingCycle",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      components: [
                        {
                          internalType: "bool",
                          name: "allowSetTerminals",
                          type: "bool",
                        },
                        {
                          internalType: "bool",
                          name: "allowSetController",
                          type: "bool",
                        },
                        {
                          internalType: "bool",
                          name: "pauseTransfers",
                          type: "bool",
                        },
                      ],
                      internalType: "struct JBGlobalFundingCycleMetadata",
                      name: "global",
                      type: "tuple",
                    },
                    {
                      internalType: "uint256",
                      name: "reservedRate",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "redemptionRate",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "ballotRedemptionRate",
                      type: "uint256",
                    },
                    {
                      internalType: "bool",
                      name: "pausePay",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "pauseDistributions",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "pauseRedeem",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "pauseBurn",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "allowMinting",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "allowTerminalMigration",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "allowControllerMigration",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "holdFees",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "preferClaimedTokenOverride",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "useTotalOverflowForRedemptions",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "useDataSourceForPay",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "useDataSourceForRedeem",
                      type: "bool",
                    },
                    {
                      internalType: "address",
                      name: "dataSource",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "metadata",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct JBFundingCycleMetadata",
                  name: "metadata",
                  type: "tuple",
                },
                {
                  internalType: "enum JBBallotState",
                  name: "ballotState",
                  type: "uint8",
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
                  components: [
                    {
                      internalType: "uint256",
                      name: "duration",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "weight",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "discountRate",
                      type: "uint256",
                    },
                    {
                      internalType: "contract IJBFundingCycleBallot",
                      name: "ballot",
                      type: "address",
                    },
                  ],
                  internalType: "struct JBFundingCycleData",
                  name: "_data",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      components: [
                        {
                          internalType: "bool",
                          name: "allowSetTerminals",
                          type: "bool",
                        },
                        {
                          internalType: "bool",
                          name: "allowSetController",
                          type: "bool",
                        },
                        {
                          internalType: "bool",
                          name: "pauseTransfers",
                          type: "bool",
                        },
                      ],
                      internalType: "struct JBGlobalFundingCycleMetadata",
                      name: "global",
                      type: "tuple",
                    },
                    {
                      internalType: "uint256",
                      name: "reservedRate",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "redemptionRate",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "ballotRedemptionRate",
                      type: "uint256",
                    },
                    {
                      internalType: "bool",
                      name: "pausePay",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "pauseDistributions",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "pauseRedeem",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "pauseBurn",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "allowMinting",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "allowTerminalMigration",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "allowControllerMigration",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "holdFees",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "preferClaimedTokenOverride",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "useTotalOverflowForRedemptions",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "useDataSourceForPay",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "useDataSourceForRedeem",
                      type: "bool",
                    },
                    {
                      internalType: "address",
                      name: "dataSource",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "metadata",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct JBFundingCycleMetadata",
                  name: "_metadata",
                  type: "tuple",
                },
                {
                  internalType: "uint256",
                  name: "_mustStartAtOrAfter",
                  type: "uint256",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "group",
                      type: "uint256",
                    },
                    {
                      components: [
                        {
                          internalType: "bool",
                          name: "preferClaimed",
                          type: "bool",
                        },
                        {
                          internalType: "bool",
                          name: "preferAddToBalance",
                          type: "bool",
                        },
                        {
                          internalType: "uint256",
                          name: "percent",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "projectId",
                          type: "uint256",
                        },
                        {
                          internalType: "address payable",
                          name: "beneficiary",
                          type: "address",
                        },
                        {
                          internalType: "uint256",
                          name: "lockedUntil",
                          type: "uint256",
                        },
                        {
                          internalType: "contract IJBSplitAllocator",
                          name: "allocator",
                          type: "address",
                        },
                      ],
                      internalType: "struct JBSplit[]",
                      name: "splits",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct JBGroupedSplits[]",
                  name: "_groupedSplits",
                  type: "tuple[]",
                },
                {
                  components: [
                    {
                      internalType: "contract IJBPaymentTerminal",
                      name: "terminal",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "token",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "distributionLimit",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "distributionLimitCurrency",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "overflowAllowance",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "overflowAllowanceCurrency",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct JBFundAccessConstraints[]",
                  name: "_fundAccessConstraints",
                  type: "tuple[]",
                },
                {
                  internalType: "contract IJBPaymentTerminal[]",
                  name: "_terminals",
                  type: "address[]",
                },
                {
                  internalType: "string",
                  name: "_memo",
                  type: "string",
                },
              ],
              name: "launchFundingCyclesFor",
              outputs: [
                {
                  internalType: "uint256",
                  name: "configuration",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "string",
                      name: "content",
                      type: "string",
                    },
                    {
                      internalType: "uint256",
                      name: "domain",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct JBProjectMetadata",
                  name: "_projectMetadata",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "duration",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "weight",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "discountRate",
                      type: "uint256",
                    },
                    {
                      internalType: "contract IJBFundingCycleBallot",
                      name: "ballot",
                      type: "address",
                    },
                  ],
                  internalType: "struct JBFundingCycleData",
                  name: "_data",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      components: [
                        {
                          internalType: "bool",
                          name: "allowSetTerminals",
                          type: "bool",
                        },
                        {
                          internalType: "bool",
                          name: "allowSetController",
                          type: "bool",
                        },
                        {
                          internalType: "bool",
                          name: "pauseTransfers",
                          type: "bool",
                        },
                      ],
                      internalType: "struct JBGlobalFundingCycleMetadata",
                      name: "global",
                      type: "tuple",
                    },
                    {
                      internalType: "uint256",
                      name: "reservedRate",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "redemptionRate",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "ballotRedemptionRate",
                      type: "uint256",
                    },
                    {
                      internalType: "bool",
                      name: "pausePay",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "pauseDistributions",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "pauseRedeem",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "pauseBurn",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "allowMinting",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "allowTerminalMigration",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "allowControllerMigration",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "holdFees",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "preferClaimedTokenOverride",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "useTotalOverflowForRedemptions",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "useDataSourceForPay",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "useDataSourceForRedeem",
                      type: "bool",
                    },
                    {
                      internalType: "address",
                      name: "dataSource",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "metadata",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct JBFundingCycleMetadata",
                  name: "_metadata",
                  type: "tuple",
                },
                {
                  internalType: "uint256",
                  name: "_mustStartAtOrAfter",
                  type: "uint256",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "group",
                      type: "uint256",
                    },
                    {
                      components: [
                        {
                          internalType: "bool",
                          name: "preferClaimed",
                          type: "bool",
                        },
                        {
                          internalType: "bool",
                          name: "preferAddToBalance",
                          type: "bool",
                        },
                        {
                          internalType: "uint256",
                          name: "percent",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "projectId",
                          type: "uint256",
                        },
                        {
                          internalType: "address payable",
                          name: "beneficiary",
                          type: "address",
                        },
                        {
                          internalType: "uint256",
                          name: "lockedUntil",
                          type: "uint256",
                        },
                        {
                          internalType: "contract IJBSplitAllocator",
                          name: "allocator",
                          type: "address",
                        },
                      ],
                      internalType: "struct JBSplit[]",
                      name: "splits",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct JBGroupedSplits[]",
                  name: "_groupedSplits",
                  type: "tuple[]",
                },
                {
                  components: [
                    {
                      internalType: "contract IJBPaymentTerminal",
                      name: "terminal",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "token",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "distributionLimit",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "distributionLimitCurrency",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "overflowAllowance",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "overflowAllowanceCurrency",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct JBFundAccessConstraints[]",
                  name: "_fundAccessConstraints",
                  type: "tuple[]",
                },
                {
                  internalType: "contract IJBPaymentTerminal[]",
                  name: "_terminals",
                  type: "address[]",
                },
                {
                  internalType: "string",
                  name: "_memo",
                  type: "string",
                },
              ],
              name: "launchProjectFor",
              outputs: [
                {
                  internalType: "uint256",
                  name: "projectId",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
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
                  internalType: "contract IJBMigratable",
                  name: "_to",
                  type: "address",
                },
              ],
              name: "migrate",
              outputs: [],
              stateMutability: "nonpayable",
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
                  internalType: "uint256",
                  name: "_tokenCount",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_beneficiary",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "_memo",
                  type: "string",
                },
                {
                  internalType: "bool",
                  name: "_preferClaimedTokens",
                  type: "bool",
                },
                {
                  internalType: "bool",
                  name: "_useReservedRate",
                  type: "bool",
                },
              ],
              name: "mintTokensOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "beneficiaryTokenCount",
                  type: "uint256",
                },
              ],
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
                  internalType: "uint256",
                  name: "_projectId",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_from",
                  type: "address",
                },
              ],
              name: "prepForMigrationOf",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "projects",
              outputs: [
                {
                  internalType: "contract IJBProjects",
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
              ],
              name: "queuedFundingCycleOf",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "number",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "configuration",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "basedOn",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "start",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "duration",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "weight",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "discountRate",
                      type: "uint256",
                    },
                    {
                      internalType: "contract IJBFundingCycleBallot",
                      name: "ballot",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "metadata",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct JBFundingCycle",
                  name: "fundingCycle",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      components: [
                        {
                          internalType: "bool",
                          name: "allowSetTerminals",
                          type: "bool",
                        },
                        {
                          internalType: "bool",
                          name: "allowSetController",
                          type: "bool",
                        },
                        {
                          internalType: "bool",
                          name: "pauseTransfers",
                          type: "bool",
                        },
                      ],
                      internalType: "struct JBGlobalFundingCycleMetadata",
                      name: "global",
                      type: "tuple",
                    },
                    {
                      internalType: "uint256",
                      name: "reservedRate",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "redemptionRate",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "ballotRedemptionRate",
                      type: "uint256",
                    },
                    {
                      internalType: "bool",
                      name: "pausePay",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "pauseDistributions",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "pauseRedeem",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "pauseBurn",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "allowMinting",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "allowTerminalMigration",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "allowControllerMigration",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "holdFees",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "preferClaimedTokenOverride",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "useTotalOverflowForRedemptions",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "useDataSourceForPay",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "useDataSourceForRedeem",
                      type: "bool",
                    },
                    {
                      internalType: "address",
                      name: "dataSource",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "metadata",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct JBFundingCycleMetadata",
                  name: "metadata",
                  type: "tuple",
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
                  components: [
                    {
                      internalType: "uint256",
                      name: "duration",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "weight",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "discountRate",
                      type: "uint256",
                    },
                    {
                      internalType: "contract IJBFundingCycleBallot",
                      name: "ballot",
                      type: "address",
                    },
                  ],
                  internalType: "struct JBFundingCycleData",
                  name: "_data",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      components: [
                        {
                          internalType: "bool",
                          name: "allowSetTerminals",
                          type: "bool",
                        },
                        {
                          internalType: "bool",
                          name: "allowSetController",
                          type: "bool",
                        },
                        {
                          internalType: "bool",
                          name: "pauseTransfers",
                          type: "bool",
                        },
                      ],
                      internalType: "struct JBGlobalFundingCycleMetadata",
                      name: "global",
                      type: "tuple",
                    },
                    {
                      internalType: "uint256",
                      name: "reservedRate",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "redemptionRate",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "ballotRedemptionRate",
                      type: "uint256",
                    },
                    {
                      internalType: "bool",
                      name: "pausePay",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "pauseDistributions",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "pauseRedeem",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "pauseBurn",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "allowMinting",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "allowTerminalMigration",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "allowControllerMigration",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "holdFees",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "preferClaimedTokenOverride",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "useTotalOverflowForRedemptions",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "useDataSourceForPay",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "useDataSourceForRedeem",
                      type: "bool",
                    },
                    {
                      internalType: "address",
                      name: "dataSource",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "metadata",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct JBFundingCycleMetadata",
                  name: "_metadata",
                  type: "tuple",
                },
                {
                  internalType: "uint256",
                  name: "_mustStartAtOrAfter",
                  type: "uint256",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "group",
                      type: "uint256",
                    },
                    {
                      components: [
                        {
                          internalType: "bool",
                          name: "preferClaimed",
                          type: "bool",
                        },
                        {
                          internalType: "bool",
                          name: "preferAddToBalance",
                          type: "bool",
                        },
                        {
                          internalType: "uint256",
                          name: "percent",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "projectId",
                          type: "uint256",
                        },
                        {
                          internalType: "address payable",
                          name: "beneficiary",
                          type: "address",
                        },
                        {
                          internalType: "uint256",
                          name: "lockedUntil",
                          type: "uint256",
                        },
                        {
                          internalType: "contract IJBSplitAllocator",
                          name: "allocator",
                          type: "address",
                        },
                      ],
                      internalType: "struct JBSplit[]",
                      name: "splits",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct JBGroupedSplits[]",
                  name: "_groupedSplits",
                  type: "tuple[]",
                },
                {
                  components: [
                    {
                      internalType: "contract IJBPaymentTerminal",
                      name: "terminal",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "token",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "distributionLimit",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "distributionLimitCurrency",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "overflowAllowance",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "overflowAllowanceCurrency",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct JBFundAccessConstraints[]",
                  name: "_fundAccessConstraints",
                  type: "tuple[]",
                },
                {
                  internalType: "string",
                  name: "_memo",
                  type: "string",
                },
              ],
              name: "reconfigureFundingCyclesOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "configuration",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "reservedTokenBalanceOf",
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
              inputs: [],
              name: "splitsStore",
              outputs: [
                {
                  internalType: "contract IJBSplitsStore",
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
              name: "tokenStore",
              outputs: [
                {
                  internalType: "contract IJBTokenStore",
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
              ],
              name: "totalOutstandingTokensOf",
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
          ],
        },
      },
    },
  ],
} as const;

export default contracts;
