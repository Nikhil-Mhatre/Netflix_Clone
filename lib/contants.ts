interface FormItem {
    FieldName: FieldName; 
    FieldLabel: FieldLabel; 
    FieldType: FieldType
}

export const SIGNIN_FORMITEMS: FormItem[] = [
    { FieldName: "email", FieldLabel: "Email", FieldType:'text' },
    { FieldName: "password", FieldLabel: "Password", FieldType:'password' },
];

export const SIGNUP_FORMITEMS: FormItem[] = [
    { FieldName: "username", FieldLabel: "Username", FieldType:'text' },
    { FieldName: "email", FieldLabel: "Email", FieldType:'email' },
    { FieldName: "password", FieldLabel: "Password", FieldType:'password' },
];