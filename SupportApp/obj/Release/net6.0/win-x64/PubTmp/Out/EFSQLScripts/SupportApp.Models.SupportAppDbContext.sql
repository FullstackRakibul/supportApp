IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240123102519_freshMigration')
BEGIN
    CREATE TABLE [Agent] (
        [AgentId] int NOT NULL IDENTITY,
        [Name] nvarchar(max) NOT NULL,
        [EmpCode] nvarchar(max) NOT NULL,
        [Email] nvarchar(max) NULL,
        [Mobile] nvarchar(max) NULL,
        [PhoneExtension] nvarchar(max) NULL,
        [Status] int NOT NULL,
        [Username] nvarchar(max) NULL,
        [Password] nvarchar(max) NULL,
        CONSTRAINT [PK_Agent] PRIMARY KEY ([AgentId])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240123102519_freshMigration')
BEGIN
    CREATE TABLE [BaseUser] (
        [UserId] int NOT NULL IDENTITY,
        [Name] nvarchar(max) NOT NULL,
        [EmpCode] nvarchar(max) NOT NULL,
        [Email] nvarchar(max) NULL,
        [Mobile] nvarchar(max) NOT NULL,
        [PhoneExtension] nvarchar(max) NULL,
        [Username] nvarchar(max) NULL,
        [Password] nvarchar(max) NULL,
        [Status] int NOT NULL,
        [WorkingStatus] int NOT NULL,
        [UserRole] int NOT NULL,
        CONSTRAINT [PK_BaseUser] PRIMARY KEY ([UserId])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240123102519_freshMigration')
BEGIN
    CREATE TABLE [Department] (
        [Id] int NOT NULL IDENTITY,
        [DepartmentName] nvarchar(max) NOT NULL,
        [DepartmentCategoryId] int NULL,
        [Note] nvarchar(max) NULL,
        [Status] tinyint NOT NULL,
        CONSTRAINT [PK_Department] PRIMARY KEY ([Id])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240123102519_freshMigration')
BEGIN
    CREATE TABLE [TicketType] (
        [Id] int NOT NULL IDENTITY,
        [TypeName] nvarchar(max) NOT NULL,
        [Status] tinyint NOT NULL,
        CONSTRAINT [PK_TicketType] PRIMARY KEY ([Id])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240123102519_freshMigration')
BEGIN
    CREATE TABLE [Unit] (
        [Id] int NOT NULL IDENTITY,
        [Name] nvarchar(max) NOT NULL,
        [Address] nvarchar(max) NOT NULL,
        [Status] bit NOT NULL,
        CONSTRAINT [PK_Unit] PRIMARY KEY ([Id])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240123102519_freshMigration')
BEGIN
    CREATE TABLE [Ticket] (
        [Id] int NOT NULL IDENTITY,
        [Title] nvarchar(max) NOT NULL,
        [Description] nvarchar(max) NULL,
        [TicketNumber] nvarchar(max) NOT NULL,
        [MessageId] nvarchar(max) NOT NULL,
        [UserId] int NULL,
        [Attachment] nvarchar(max) NULL,
        [IsEmail] bit NULL,
        [FromEmail] nvarchar(max) NULL,
        [EmailCc] nvarchar(max) NULL,
        [UpdatedBy] int NULL,
        [CreatedAt] nvarchar(max) NULL,
        [UpdatedAt] nvarchar(max) NULL,
        [Status] int NOT NULL,
        [Priority] int NOT NULL,
        [TicketTypeId] int NOT NULL,
        CONSTRAINT [PK_Ticket] PRIMARY KEY ([Id]),
        CONSTRAINT [FK_Ticket_TicketType_TicketTypeId] FOREIGN KEY ([TicketTypeId]) REFERENCES [TicketType] ([Id]) ON DELETE CASCADE
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240123102519_freshMigration')
BEGIN
    CREATE TABLE [Review] (
        [Id] int NOT NULL IDENTITY,
        [TicketId] int NOT NULL,
        [ReviewerId] int NULL,
        [ReviewNote] nvarchar(max) NOT NULL,
        [CreatedAt] datetime2 NULL,
        [Status] bit NOT NULL,
        CONSTRAINT [PK_Review] PRIMARY KEY ([Id]),
        CONSTRAINT [FK_Review_Ticket_TicketId] FOREIGN KEY ([TicketId]) REFERENCES [Ticket] ([Id]) ON DELETE CASCADE
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240123102519_freshMigration')
BEGIN
    CREATE TABLE [Target] (
        [Id] int NOT NULL IDENTITY,
        [TicketId] int NOT NULL,
        [AgentId] int NOT NULL,
        [DepartmentId] int NOT NULL,
        [UnitId] int NOT NULL,
        [Objective] nvarchar(max) NULL,
        CONSTRAINT [PK_Target] PRIMARY KEY ([Id]),
        CONSTRAINT [FK_Target_Ticket_TicketId] FOREIGN KEY ([TicketId]) REFERENCES [Ticket] ([Id]) ON DELETE CASCADE
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240123102519_freshMigration')
BEGIN
    CREATE TABLE [DepartmentTarget] (
        [DepartmentId] int NOT NULL,
        [TargetsId] int NOT NULL,
        CONSTRAINT [PK_DepartmentTarget] PRIMARY KEY ([DepartmentId], [TargetsId]),
        CONSTRAINT [FK_DepartmentTarget_Department_DepartmentId] FOREIGN KEY ([DepartmentId]) REFERENCES [Department] ([Id]) ON DELETE CASCADE,
        CONSTRAINT [FK_DepartmentTarget_Target_TargetsId] FOREIGN KEY ([TargetsId]) REFERENCES [Target] ([Id]) ON DELETE CASCADE
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240123102519_freshMigration')
BEGIN
    CREATE TABLE [Notification] (
        [Id] int NOT NULL IDENTITY,
        [UserId] nvarchar(max) NULL,
        [IsRead] bit NOT NULL,
        [Message] nvarchar(max) NOT NULL,
        [TargetId] int NOT NULL,
        [CreatedAt] datetime2 NOT NULL,
        CONSTRAINT [PK_Notification] PRIMARY KEY ([Id]),
        CONSTRAINT [FK_Notification_Target_TargetId] FOREIGN KEY ([TargetId]) REFERENCES [Target] ([Id]) ON DELETE CASCADE
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240123102519_freshMigration')
BEGIN
    CREATE TABLE [TargetUnit] (
        [TargetsId] int NOT NULL,
        [UnitId] int NOT NULL,
        CONSTRAINT [PK_TargetUnit] PRIMARY KEY ([TargetsId], [UnitId]),
        CONSTRAINT [FK_TargetUnit_Target_TargetsId] FOREIGN KEY ([TargetsId]) REFERENCES [Target] ([Id]) ON DELETE CASCADE,
        CONSTRAINT [FK_TargetUnit_Unit_UnitId] FOREIGN KEY ([UnitId]) REFERENCES [Unit] ([Id]) ON DELETE CASCADE
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240123102519_freshMigration')
BEGIN
    CREATE INDEX [IX_DepartmentTarget_TargetsId] ON [DepartmentTarget] ([TargetsId]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240123102519_freshMigration')
BEGIN
    CREATE INDEX [IX_Notification_TargetId] ON [Notification] ([TargetId]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240123102519_freshMigration')
BEGIN
    CREATE INDEX [IX_Review_TicketId] ON [Review] ([TicketId]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240123102519_freshMigration')
BEGIN
    CREATE UNIQUE INDEX [IX_Target_TicketId] ON [Target] ([TicketId]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240123102519_freshMigration')
BEGIN
    CREATE INDEX [IX_TargetUnit_UnitId] ON [TargetUnit] ([UnitId]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240123102519_freshMigration')
BEGIN
    CREATE INDEX [IX_Ticket_TicketTypeId] ON [Ticket] ([TicketTypeId]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240123102519_freshMigration')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20240123102519_freshMigration', N'6.0.26');
END;
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240125051739_targetModelAgentChange')
BEGIN
    DECLARE @var0 sysname;
    SELECT @var0 = [d].[name]
    FROM [sys].[default_constraints] [d]
    INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
    WHERE ([d].[parent_object_id] = OBJECT_ID(N'[Target]') AND [c].[name] = N'AgentId');
    IF @var0 IS NOT NULL EXEC(N'ALTER TABLE [Target] DROP CONSTRAINT [' + @var0 + '];');
    ALTER TABLE [Target] ALTER COLUMN [AgentId] int NULL;
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240125051739_targetModelAgentChange')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20240125051739_targetModelAgentChange', N'6.0.26');
END;
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240130032015_AddressNullable')
BEGIN
    DECLARE @var1 sysname;
    SELECT @var1 = [d].[name]
    FROM [sys].[default_constraints] [d]
    INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
    WHERE ([d].[parent_object_id] = OBJECT_ID(N'[Unit]') AND [c].[name] = N'Address');
    IF @var1 IS NOT NULL EXEC(N'ALTER TABLE [Unit] DROP CONSTRAINT [' + @var1 + '];');
    ALTER TABLE [Unit] ALTER COLUMN [Address] nvarchar(max) NULL;
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240130032015_AddressNullable')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20240130032015_AddressNullable', N'6.0.26');
END;
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240130090936_targetTicketId')
BEGIN
    DROP INDEX [IX_Target_TicketId] ON [Target];
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240130090936_targetTicketId')
BEGIN
    CREATE INDEX [IX_Target_TicketId] ON [Target] ([TicketId]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240130090936_targetTicketId')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20240130090936_targetTicketId', N'6.0.26');
END;
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240201082708_AddAgentRole')
BEGIN
    DROP INDEX [IX_Target_TicketId] ON [Target];
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240201082708_AddAgentRole')
BEGIN
    ALTER TABLE [Agent] ADD [role] int NOT NULL DEFAULT 0;
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240201082708_AddAgentRole')
BEGIN
    CREATE UNIQUE INDEX [IX_Target_TicketId] ON [Target] ([TicketId]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240201082708_AddAgentRole')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20240201082708_AddAgentRole', N'6.0.26');
END;
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240201082821_AddAgentRole2')
BEGIN
    DECLARE @var2 sysname;
    SELECT @var2 = [d].[name]
    FROM [sys].[default_constraints] [d]
    INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
    WHERE ([d].[parent_object_id] = OBJECT_ID(N'[Agent]') AND [c].[name] = N'role');
    IF @var2 IS NOT NULL EXEC(N'ALTER TABLE [Agent] DROP CONSTRAINT [' + @var2 + '];');
    ALTER TABLE [Agent] ALTER COLUMN [role] int NULL;
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240201082821_AddAgentRole2')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20240201082821_AddAgentRole2', N'6.0.26');
END;
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240204044005_addCreatorId')
BEGIN
    ALTER TABLE [Ticket] ADD [CreatedBy] nvarchar(max) NULL;
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240204044005_addCreatorId')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20240204044005_addCreatorId', N'6.0.26');
END;
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240210080517_MenuTableadd2')
BEGIN
    CREATE TABLE [Menu] (
        [Id] int NOT NULL IDENTITY,
        [ModuleId] int NULL,
        [Title] nvarchar(max) NOT NULL,
        [Description] nvarchar(max) NULL,
        [Icon] nvarchar(max) NULL,
        [Url] nvarchar(max) NOT NULL,
        [ParentId] int NULL,
        [CreatedAt] datetime2 NOT NULL,
        [CreatedBy] int NULL,
        [UpdatedAt] datetime2 NULL,
        [UpdatedBy] int NULL,
        CONSTRAINT [PK_Menu] PRIMARY KEY ([Id])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240210080517_MenuTableadd2')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20240210080517_MenuTableadd2', N'6.0.26');
END;
GO

COMMIT;
GO

