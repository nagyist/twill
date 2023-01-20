<?php

namespace A17\Twill\Tests\Unit\Components;

use A17\Twill\Services\Forms\Option;
use A17\Twill\Services\Forms\Options;
use A17\Twill\View\Components\Fields\Checkboxes;

class CheckboxesFieldTest extends ComponentTestBase
{
    public string $component = Checkboxes::class;
    public array $data = [
        'name' => 'name',
        'label' => 'label',
        'options' => [
            [
                'label' => 'Bar',
                'value' => 'foo',
            ],
        ],
    ];
    public string $field = \A17\Twill\Services\Forms\Fields\Checkboxes::class;
    public array $fieldSetters = [
        'name' => 'name',
    ];
    public string $expectedView = 'twill::partials.form._checkboxes';

    protected function setUp(): void
    {
        parent::setUp();

        $this->fieldSetters['options'] = new Options([
            new Option('key', 'value'),
        ]);
    }
}
