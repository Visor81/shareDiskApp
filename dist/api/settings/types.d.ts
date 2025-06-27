export interface Settings {
    AuthType: string;
    AskTimezoneChange?: boolean;
    CreateRoomsRight?: boolean;
    AppType: string;
    IsCrypt: boolean;
    UserId: number;
    Culture?: string;
    Tabs: [];
    Support: {
        Phone: string;
        Email: string;
    };
    SecuritySetting: null;
    DeviceSettings: {
        PushNotifications: number[];
        SoundNotifications: [];
    };
    ModuleSettings: {
        ModulesAccess: string[];
        ModuleUrls: {
            Name: string;
            Url: string;
            ShowItem: boolean;
            Title: string;
            Icon: string;
            HasAccess: boolean;
        }[];
    };
    Timezone: {
        Id: number;
        SecondId: number;
        SecondEnabled: boolean;
    };
    DocumentServer: {
        Url: string;
    };
    WebSite: {
        Url: string;
    };
    Endpoint: null;
    Partial?: boolean;
    ProfileUrl: {
        Url: string;
    };
    ReduceEventBrightness: boolean;
    SecuritySettings: null;
    ExternalLinkSettings: {
        IsDisabled: boolean;
        IsEnabledRules: boolean;
        Rules: {
            ExternalLinkRuleDirectory: number[];
            Id: number;
            MaxActivePeriod: null;
            Password: {
                IsDigit: boolean;
                IsHigh: boolean;
                IsLow: boolean;
                MinLength: number;
            };
            Roles: {
                Count: number;
                Id: number;
                IsRemovable?: null;
                Name: string;
                Type: null;
            }[];
        }[];
    };
}
